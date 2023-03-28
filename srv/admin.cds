using {mst as my } from '../db/core';

service AdminService{
    entity IotMessages as projection on my.IotMessages;
}