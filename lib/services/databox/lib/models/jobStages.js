/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Job stages.
 *
 */
class JobStages {
  /**
   * Create a JobStages.
   * @member {string} stageName Name of the job stage. Possible values include:
   * 'DeviceOrdered', 'DevicePrepared', 'Dispatched', 'Delivered', 'PickedUp',
   * 'AtAzureDC', 'DataCopy', 'Completed', 'CompletedWithErrors', 'Cancelled',
   * 'Failed_IssueReportedAtCustomer', 'Failed_IssueDetectedAtAzureDC',
   * 'Aborted', 'Current'
   * @member {string} [displayName] Display name of the job stage.
   * @member {string} stageStatus Status of the job stage. Possible values
   * include: 'None', 'InProgress', 'Succeeded', 'Failed', 'Cancelled',
   * 'Cancelling', 'SucceededWithErrors'
   * @member {date} [stageTime] Time for the job stage in UTC ISO 8601 format.
   * @member {object} [jobStageDetails] Job Stage Details
   * @member {array} [errorDetails] Error details for the stage.
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobStages
   *
   * @returns {object} metadata of JobStages
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobStages',
      type: {
        name: 'Composite',
        className: 'JobStages',
        modelProperties: {
          stageName: {
            required: true,
            serializedName: 'stageName',
            type: {
              name: 'Enum',
              allowedValues: [ 'DeviceOrdered', 'DevicePrepared', 'Dispatched', 'Delivered', 'PickedUp', 'AtAzureDC', 'DataCopy', 'Completed', 'CompletedWithErrors', 'Cancelled', 'Failed_IssueReportedAtCustomer', 'Failed_IssueDetectedAtAzureDC', 'Aborted', 'Current' ]
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          stageStatus: {
            required: true,
            serializedName: 'stageStatus',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'InProgress', 'Succeeded', 'Failed', 'Cancelled', 'Cancelling', 'SucceededWithErrors' ]
            }
          },
          stageTime: {
            required: false,
            serializedName: 'stageTime',
            type: {
              name: 'DateTime'
            }
          },
          jobStageDetails: {
            required: false,
            serializedName: 'jobStageDetails',
            type: {
              name: 'Object'
            }
          },
          errorDetails: {
            required: false,
            serializedName: 'errorDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobErrorDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobErrorDetails'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JobStages;
