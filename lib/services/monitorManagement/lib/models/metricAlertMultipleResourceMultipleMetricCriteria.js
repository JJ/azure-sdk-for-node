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
 * Speficies the metric alert criteria for multiple resource that has multiple
 * metric criteria.
 *
 * @extends models['MetricAlertCriteria']
 */
class MetricAlertMultipleResourceMultipleMetricCriteria extends models['MetricAlertCriteria'] {
  /**
   * Create a MetricAlertMultipleResourceMultipleMetricCriteria.
   * @member {array} [allOf] the list of multiple metric criteria for this 'all
   * of' operation.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MetricAlertMultipleResourceMultipleMetricCriteria
   *
   * @returns {object} metadata of MetricAlertMultipleResourceMultipleMetricCriteria
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'MetricAlertCriteria',
        className: 'MetricAlertMultipleResourceMultipleMetricCriteria',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: 'odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          allOf: {
            required: false,
            serializedName: 'allOf',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MultiMetricCriteriaElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
                      type: {
                        name: 'Dictionary',
                        value: {
                            required: false,
                            serializedName: 'ObjectElementType',
                            type: {
                              name: 'Object'
                            }
                        }
                      }
                    },
                    polymorphicDiscriminator: {
                      serializedName: 'criterionType',
                      clientName: 'criterionType'
                    },
                    uberParent: 'MultiMetricCriteria',
                    className: 'MultiMetricCriteria'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = MetricAlertMultipleResourceMultipleMetricCriteria;
