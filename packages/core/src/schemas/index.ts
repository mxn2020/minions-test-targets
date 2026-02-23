/**
 * @module @minions-test-targets/sdk/schemas
 * Custom MinionType schemas for Minions Test-targets.
 */

import type { MinionType } from 'minions-sdk';

export const testtargetType: MinionType = {
  id: 'test-targets-test-target',
  name: 'Test target',
  slug: 'test-target',
  description: 'An AI agent registered for testing.',
  icon: '🎯',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'endpoint', type: 'string', label: 'endpoint' },
    { name: 'protocol', type: 'select', label: 'protocol' },
    { name: 'framework', type: 'string', label: 'framework' },
    { name: 'capabilities', type: 'string', label: 'capabilities' },
    { name: 'authMethod', type: 'select', label: 'authMethod' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const targetcapabilityType: MinionType = {
  id: 'test-targets-target-capability',
  name: 'Target capability',
  slug: 'target-capability',
  description: 'A declared capability of a test target.',
  icon: '⚡',
  schema: [
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'toolNames', type: 'string', label: 'toolNames' },
    { name: 'expectedBehavior', type: 'string', label: 'expectedBehavior' },
  ],
};

export const customTypes: MinionType[] = [
  testtargetType,
  targetcapabilityType,
];

