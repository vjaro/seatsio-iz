import { Booth, GeneralAdmissionArea, InteractiveSection, Seat, SelectableObject, Table } from "@seatsio/seatsio-types";
export declare const didPropsChange: <P extends {
    [key: string]: any;
}>(prevProps: P, nextProps: P) => boolean;
export declare const isSeat: (obj: SelectableObject) => obj is Seat;
export declare const isTable: (obj: SelectableObject) => obj is Table;
export declare const isSection: (obj: SelectableObject) => obj is InteractiveSection;
export declare const isBooth: (obj: SelectableObject) => obj is Booth;
export declare const isGeneralAdmission: (obj: SelectableObject) => obj is GeneralAdmissionArea;
