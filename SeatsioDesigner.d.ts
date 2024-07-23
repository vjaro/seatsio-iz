import Embeddable from './Embeddable';
import { ChartDesignerConfigOptions, Seatsio } from '@seatsio/seatsio-types';
export default class SeatsioDesigner extends Embeddable<ChartDesignerConfigOptions> {
    createChart(seatsio: Seatsio, config: ChartDesignerConfigOptions): import("@seatsio/seatsio-types").ChartDesigner;
}
