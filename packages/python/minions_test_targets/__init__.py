"""
Minions Test-targets Python SDK

Agent-under-test definitions, endpoints, capabilities, and auth configs
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Test-targets.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
