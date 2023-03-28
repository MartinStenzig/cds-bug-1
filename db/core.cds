namespace mst;

using {
    managed,
    cuid
} from '@sap/cds/common';


entity IotMessages : cuid, managed {
    weatherTempOutdoorCelsius             : String(255);
}