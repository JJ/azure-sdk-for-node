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
 * The response model for the list connection operation.
 */
class ConnectionListResult extends Array {
  /**
   * Create a ConnectionListResult.
   * @member {string} [nextLink] Gets or sets the next link.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ConnectionListResult
   *
   * @returns {object} metadata of ConnectionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectionListResult',
      type: {
        name: 'Composite',
        className: 'ConnectionListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ConnectionElementType',
                  type: {
                    name: 'Composite',
                    className: 'Connection'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectionListResult;