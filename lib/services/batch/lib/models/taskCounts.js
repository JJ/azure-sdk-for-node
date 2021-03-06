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
 * @summary The task counts for a job.
  *
 */
class TaskCounts {
  /**
   * Create a TaskCounts.
   * @member {number} active The number of tasks in the active state.
   * @member {number} running The number of tasks in the running or preparing
   * state.
   * @member {number} completed The number of tasks in the completed state.
   * @member {number} succeeded The number of tasks which succeeded. A task
   * succeeds if its result (found in the executionInfo property) is 'success'.
   * @member {number} failed The number of tasks which failed. A task fails if
   * its result (found in the executionInfo property) is 'failure'.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TaskCounts
   *
   * @returns {object} metadata of TaskCounts
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TaskCounts',
      type: {
        name: 'Composite',
        className: 'TaskCounts',
        modelProperties: {
          active: {
            required: true,
            serializedName: 'active',
            type: {
              name: 'Number'
            }
          },
          running: {
            required: true,
            serializedName: 'running',
            type: {
              name: 'Number'
            }
          },
          completed: {
            required: true,
            serializedName: 'completed',
            type: {
              name: 'Number'
            }
          },
          succeeded: {
            required: true,
            serializedName: 'succeeded',
            type: {
              name: 'Number'
            }
          },
          failed: {
            required: true,
            serializedName: 'failed',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = TaskCounts;
