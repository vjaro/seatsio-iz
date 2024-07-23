import * as React from 'react';
import { ChartDesigner, CommonConfigOptions, EventManager, Region, SeatingChart, Seatsio } from '@seatsio/seatsio-types';
export type EmbeddableProps<T> = {
    onRenderStarted?: (chart: SeatingChart | EventManager) => void;
    chartJsUrl?: string;
    region: Region;
} & T;
export default abstract class Embeddable<T extends CommonConfigOptions> extends React.Component<EmbeddableProps<T>> {
    private container;
    private chart;
    private firstRender;
    private static seatsioBundles;
    static defaultProps: {
        chartJsUrl: string;
    };
    constructor(props: EmbeddableProps<T>);
    abstract createChart(seatsio: Seatsio, config: T): SeatingChart | EventManager | ChartDesigner;
    componentDidMount(): void;
    componentDidUpdate(prevProps: EmbeddableProps<T>): void;
    getChartUrl(): string;
    createAndRenderChart(): Promise<void>;
    extractConfigFromProps(): any;
    componentWillUnmount(): void;
    destroyChart(): void;
    loadSeatsio(): Promise<Seatsio>;
    render(): React.ReactNode;
}
