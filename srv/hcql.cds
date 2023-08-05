using {mst as my } from '../db/core';

@protocol: 'hcql'
service HcqlService @(path: '/hcql') {
    entity IotMessages as projection on my.IotMessages;
}