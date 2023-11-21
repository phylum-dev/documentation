---
title: Notifications
category: 6255e67693d5200013b1fa41
hidden: false
---

# Overview

Phylum supports notification systems using email addresses or webhooks for various platforms including Slack, Microsoft Teams, and Discord. This document guides you through setting up notifications for each of these platforms.

Notifications are a Phylum Pro feature and can be configured at the group or project level. Currently, the only trigger for notifications is [continuous monitoring](https://docs.phylum.io/docs/continuous_monitoring) events.

## Notification Setup

### Email Notifications

1. Navigate to the 'Notifications' section in your Phylum group or project.
2. Enter the email address where you wish to receive notifications.
3. Save your settings to enable email notifications.

### Slack Webhook Integration

1. Create a Slack webhook following the guide at [Slack Webhook Setup](https://api.slack.com/messaging/webhooks#getting_started).
2. In Phylum, navigate to the 'Notifications' section.
3. Enter your Slack webhook URL.
4. Perform a test to ensure the notifications are being sent correctly.

### Microsoft Teams Webhook Integration

1. Set up an incoming webhook in Microsoft Teams as described in [Microsoft Teams Webhook Setup](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook).
2. In your Phylum account, go to the 'Notifications' section.
3. Enter your Microsoft Teams webhook URL.
4. Perform a test to ensure the notifications are being sent correctly.

### Discord Webhook Integration

1. Create a Discord webhook following Discord's guidelines at [Discord Webhook Guide](https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook). Note that Discord support currently uses a Slack-compatible webhook format.
2. In Phylum, access the 'Notifications' section.
3. Paste your Discord webhook URL.
4. Perform a test to ensure the notifications are being sent correctly.

## Conclusion

Setting up notifications through email or webhooks ensures you stay updated with your Phylum account activities. Follow these steps to integrate Slack, Microsoft Teams, or Discord with your Phylum account for real-time notifications.
