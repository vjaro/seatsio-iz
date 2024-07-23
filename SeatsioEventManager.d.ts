import { EventManagerConfigOptions, Seatsio } from '@seatsio/seatsio-types';
import Embeddable from './Embeddable';
export default class SeatsioEventManager extends Embeddable<EventManagerConfigOptions> {
    createChart(seatsio: Seatsio, config: EventManagerConfigOptions): import("@seatsio/seatsio-types").EventManager;
}
