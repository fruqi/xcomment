# XComment

> An app where you can post a comment to a certain Github organization

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To re-build
docker-compose build
```

## Available Endpoints

> POST /orgs/<org-name>/comments
  * Submit a comment to a particular organization

> GET /orgs/<org-name>/comments
  * Return all comments from a particular organization

> DELETE /orgs/<org-name>/comments
  * (Soft) Delete all comments associated with a particular organization

> GET /orgs/<org-name>/members
  * Return all members of an organization and sorted by the number of followers in descending order