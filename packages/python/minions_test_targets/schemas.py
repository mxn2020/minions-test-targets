"""
Minions Test-targets SDK — Type Schemas
Custom MinionType schemas for Minions Test-targets.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

test_target_type = MinionType(
    id="test-targets-test-target",
    name="Test target",
    slug="test-target",
    description="An AI agent registered for testing.",
    icon="🎯",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="endpoint", type="string", label="endpoint"),
        FieldDefinition(name="protocol", type="select", label="protocol"),
        FieldDefinition(name="framework", type="string", label="framework"),
        FieldDefinition(name="capabilities", type="string", label="capabilities"),
        FieldDefinition(name="authMethod", type="select", label="authMethod"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

target_capability_type = MinionType(
    id="test-targets-target-capability",
    name="Target capability",
    slug="target-capability",
    description="A declared capability of a test target.",
    icon="⚡",
    schema=[
        FieldDefinition(name="targetId", type="string", label="targetId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="toolNames", type="string", label="toolNames"),
        FieldDefinition(name="expectedBehavior", type="string", label="expectedBehavior"),
    ],
)

custom_types: list[MinionType] = [
    test_target_type,
    target_capability_type,
]

