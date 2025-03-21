# Notifications

Phylum supports notification systems using email addresses or webhooks for various platforms including Slack, Microsoft Teams, and Discord. This document guides you through setting up notifications for each of these platforms.

Notifications can be configured at the group or project level. Currently, the only trigger for notifications is [Continuous Monitoring](../knowledge_base/continuous_monitoring.md) events.

## Notification Setup

### Email Notifications

1. Navigate to the 'Notifications' section in your Phylum group or project.
2. Enter the email addresses that you wish to receive notifications.
3. `Confirm` the addresses that will be sent notifications.
4. A `Subscription Confirmation` email will be sent and each user will need to confirm their subscription.

### Webhook Integration

1. Navigate to the 'Notifications' section in your Phylum group or project.
2. Follow the respective setup guide for the currently supported platforms:
   - **Slack**: [Slack Webhook Setup](https://api.slack.com/messaging/webhooks#getting_started)
   - **Microsoft Teams**: [Microsoft Teams Webhook Setup](https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook)
   - **Discord**: [Discord Webhook Guide](https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook) (Note: Discord uses a Slack-compatible webhook format)
3. Enter the webhook URL provided by your chosen platform.
4. `Update` your settings to enable Webhook notifications.

## Conclusion

Setting up notifications for emails or webhooks ensures you stay updated with your Phylum account activities. Follow these steps to receive notifications via your preferred communication method.
