# Sumo Logic Integration

## Overview

Phylum can be integrated with [Sumo Logic](https://www.sumologic.com) to incorporate Phylum's curated list of malicious open-source package hashes into a Sumo Logic lookup table for searching/matching of log data within Sumo Logic.

## Getting Started

Sumo Logic users who purchase a Phylum threat feed subscription can follow the instructions below to subscribe to Phylum's curated malicious package hash list distribution. Users will need to run a Python script to periodically load new data from Phylum's Threat Feed into Sumo Logic.

There are two separate pieces of information needed to complete the subscription process:
1. A Sumo Logic user account API token
2. A Phylum user account API token

### Obtain a Sumo Logic user account API token

1. Log in to your Sumo Logic user dashboard and then click on your username (lower left), then `Preferences`.
2. Add an `Access Key` under `My Access Keys`
3. Copy the `Access ID` and `Access Key` and store them safely in a password manager.

### Obtain a Phylum user account API token

1. Create a token using the [CLI](https://docs.phylum.io/docs/phylum_auth_create-token) or the [UI](https://docs.phylum.io/docs/api-keys).

### Install the Phylum app from Sumo Logic App Catalog
After configuring collection you can [install](https://help.sumologic.com/05Search/Library/Apps-in-Sumo-Logic/Install-Apps-from-the-Library) the Sumo Logic App for Phylum from App Catalog.

### Install the Phylum Threat Feed Python Script
Phylum provides a Python script to load threat feed data into Sumo Logic. This script should be run on a schedule to get regular updates from Phylum’s threat feed.

1. Clone the repository locally: `git clone https://github.com/SumoLogic/sumologic-public-partner-apps`
1. Navigate to the Phylum subdirectory of the cloned repository, then to “script”: `cd Phylum/script`
1. Install the required Python dependencies for the script: `pip install -r requirements.txt`
1. Create a new lookup table in Sumo Logic under the User’s Personal folder: <https://help.sumologic.com/docs/search/lookup-tables/create-lookup-table/>
    1. Note the path to the lookup table: An example path for a lookup table named “threat-table” in a folder named “phylum-threat-data” under the personal folder is: `/Library/Users/pete@phylum.com/phylum-threat-data/threat-table`
1. Edit the Python script named `load_threat_data.py` and change the path in the global variable `PHYLUM_LTABLE_PATH` to match the path from Step 4i.
1. Export environment variables for Sumo Logic API access. These are required for the script to load Phylum’s threat data into the User’s new lookup table created in Step 4.
    1. `SUMOAID` = Sumo Logic Access ID: `export SUMOAID=XXXXX`
    1. `SUMOAKEY` = Sumo Logic Access Key: `export SUMOAKEY=YYYYY`
1. Export environment variable for Phylum API access. This is required to authenticate to Phylum’s API and access the threat feed.
    1. `PHYLUM_API_TOKEN` = Phylum API Token (see instructions above if you have not already created this): `export PHYLUM_API_TOKEN=ZZZZZZ`
1. Run the Python script `load_threat_data.py` ensuring environment variables from Steps 6 and 7 are correctly provided: `python load_threat_data.py`
1. Consider automating execution of the Python script `load_threat_data.py` through a scheduling tool such as Cron:
    1. To run the script hourly, using the following addition to a crontab ensuring paths to the python program and load_threat_data.py script are updated: `0 * * * * /usr/bin/python /home/user/load_threat_data.py`
