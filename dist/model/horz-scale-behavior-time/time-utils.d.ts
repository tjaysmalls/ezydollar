import { TimedData } from '../data-layer';
import { InternalHorzScaleItem } from '../ihorz-scale-behavior';
import { BusinessDay, Time } from './types';
export type TimeConverter = (time: Time) => InternalHorzScaleItem;
export declare function businessDayConverter(time: Time): InternalHorzScaleItem;
export declare function timestampConverter(time: Time): InternalHorzScaleItem;
export declare function selectTimeConverter(data: TimedData<Time>[]): TimeConverter | null;
export declare function convertTime(time: Time): InternalHorzScaleItem;
export declare function stringToBusinessDay(value: string): BusinessDay;
export declare function convertStringToBusinessDay(value: TimedData<Time>): void;
export declare function convertStringsToBusinessDays(data: TimedData<Time>[]): void;
