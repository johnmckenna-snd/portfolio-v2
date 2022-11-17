---
slug: "/work/champion-data-systems"
date: "2022-10-31"
title: "Champion Data Systems"
subtitle: "Application Developer & Contractor"
tags: ["material ui", "raspi", "node.js", "nginx", "docker", "socket.io", "ui/ux", "react"]
type: "work"
---

# Overview
[Website](https://champds.com)

I started at Champion Data Systems (Champ) as a contractor before they eventually hired me as an application developer. As the only employee, I had a variety of projects. My work centered around full-stack web development and occasionally included UX and marketing duties.

- Microservices (node.js)
- Cloud: GCP/AWS/Digital Ocean/Mongo Atlas
- React
- Limited Raspberry Pi Development
- UI/UX Design
- Marketing Materials Creation
- Developed Green Initiative
- OAuth2
- Redis
- socket.io

# Development

Champ's first infrastructure is a monolithic stack based on metal servers. My boss tasked us with developing the second generation of the platform utilizing microservices and hosted in the cloud.

We started from the ground up and completely rebuilt the platform. My boss and I did the planning, and I wrote most of the code. The structure was primarily node.js containerized with Docker deployed with CI/CD pipelines built on GitHub Actions to various cloud providers. We used Auth0 as an OAuth2 authentication provider. We wrote our authorization application called Sentry, which provides granular authorization.

# Selected Projects

## Admin Dashboard and Email Response Time Crawler

After we finished building out the microservices platform, complete with an authorization application, we needed an Admin Dashboard to configure and monitor customers, credentials, permissions, and metrics.

We chose Material UI as our component library to speed up development since branding was not an issue. I used this with React to design and create the dashboard.

The owner in charge of sales and marketing wanted a way to monitor email response times in our help email. The commercial solutions he researched didn't fit the use case: a graph showing average daily response time. So, the developed application crawled our email using the Gmail API, stored it in MongoDB, and calculated response times. Then, using the Mongo Aggregation Pipeline, I built a set of aggregations to return the response times to the Admin Server for display in the browser.

Stack used:

- node.js
- Gmail API
- Champ Authorization API (Sentry)
- Champ Database API
- React
- Material UI
- MongoDB

## Graphics

Champ received customer requests for a simple digital signage solution in addition to their video packages. I built a solution for real-time control of a React app running in a browser in Kiosk Mode. A customer could define different Scenes which contain Scene Items. A browser in kiosk mode displays these Scene Items. The use of socket.io allowed an event-based architecture which enabled the application to be very responsive.

Stack used:

- styled-components
- React
- node.js
- socket.io
- Champ Database API
- Redis
- Auth0

## Green Initiative

Before the annual strategy meeting, the owners offered me the opportunity to pitch a strategic goal. I pitched a Green Initiative, which would involve defining Champ's carbon footprint and enumerating solutions to reduce it.

The highest source of carbon emissions are from our hardware running on-premise in our customer's buildings. Not only is electronic hardware carbon-intensive to product, but it also is carbon-intensive to run 24/7. Fortunately, Champ had already mitigated the virgin hardware problem by using pre-owned computers when possible.

As a smaller business, further reducing our footprint would be tricky. We priced out solutions for reusable shipping materials, but that was too cost-intensive to realize. I looked into the carbon offset market, but that market is ripe with nebulous and opaque claims. So, we decided to keep monitoring our footprint and, when possible, continue using pre-owned hardware.