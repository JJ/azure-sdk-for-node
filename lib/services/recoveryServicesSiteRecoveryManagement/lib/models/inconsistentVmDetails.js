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

/**
 * This class stores the monitoring details for consistency check of
 * inconsistent Protected Entity.
 *
 */
class InconsistentVmDetails {
  /**
   * Create a InconsistentVmDetails.
   * @member {string} [vmName] The Vm name.
   * @member {string} [cloudName] The Cloud name.
   * @member {array} [details] The list of details regarding state of the
   * Protected Entity in SRS and On prem.
   * @member {array} [errorIds] The list of error ids.
   */
  constructor() {
  }

  /**
   * Defines the metadata of InconsistentVmDetails
   *
   * @returns {object} metadata of InconsistentVmDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InconsistentVmDetails',
      type: {
        name: 'Composite',
        className: 'InconsistentVmDetails',
        modelProperties: {
          vmName: {
            required: false,
            serializedName: 'vmName',
            type: {
              name: 'String'
            }
          },
          cloudName: {
            required: false,
            serializedName: 'cloudName',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          errorIds: {
            required: false,
            serializedName: 'errorIds',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = InconsistentVmDetails;