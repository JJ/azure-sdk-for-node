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
 * A copy activity QuickBooks server source.
 *
 * @extends models['CopySource']
 */
class QuickBooksSource extends models['CopySource'] {
  /**
   * Create a QuickBooksSource.
   * @member {object} [query] A query to retrieve data from source. Type:
   * string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of QuickBooksSource
   *
   * @returns {object} metadata of QuickBooksSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QuickBooksSource',
      type: {
        name: 'Composite',
        className: 'QuickBooksSource',
        modelProperties: {
          sourceRetryCount: {
            required: false,
            serializedName: 'sourceRetryCount',
            type: {
              name: 'Object'
            }
          },
          sourceRetryWait: {
            required: false,
            serializedName: 'sourceRetryWait',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          query: {
            required: false,
            serializedName: 'query',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = QuickBooksSource;