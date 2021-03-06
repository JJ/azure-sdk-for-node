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
 * Definition of the connection fields.
 *
 */
class FieldDefinition {
  /**
   * Create a FieldDefinition.
   * @member {boolean} [isEncrypted] Gets or sets the isEncrypted flag of the
   * connection field definition.
   * @member {boolean} [isOptional] Gets or sets the isOptional flag of the
   * connection field definition.
   * @member {string} type Gets or sets the type of the connection field
   * definition.
   */
  constructor() {
  }

  /**
   * Defines the metadata of FieldDefinition
   *
   * @returns {object} metadata of FieldDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FieldDefinition',
      type: {
        name: 'Composite',
        className: 'FieldDefinition',
        modelProperties: {
          isEncrypted: {
            required: false,
            serializedName: 'isEncrypted',
            type: {
              name: 'Boolean'
            }
          },
          isOptional: {
            required: false,
            serializedName: 'isOptional',
            type: {
              name: 'Boolean'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FieldDefinition;
