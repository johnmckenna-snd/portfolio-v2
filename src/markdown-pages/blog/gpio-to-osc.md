---
slug: "/blog/gpio-to-osc-application"
date: "2022-11-05"
title: "An Application to send GPIO via OSC"
subtitle: "Built specifically for triggering Theatrical Effects from GPIO input"
tags: ["gpio", "raspi", "node.js", "nginx", "docker", "osc", "qlab"]
featuredImage: "../../images/gpio-to-osc-logo.png"
---

![GPIO to OSC](../../images/gpio-to-osc-logo.png)

**TL;DR**
[Github](https://github.com/johnmckenna-snd/gpio-to-osc)

# Goal

I built this app when a friend at a theater company needed an easy way to trigger a door opening and closing that didn't involve MIDI. When they need to trigger something, they use contact closures that send MIDI messages. MIDI is robust but simple. It has some problems like run length limitations. There aren't very many open-source applications in the Theater industry, so I open-sourced this so the community can use it.

I wanted to develop a more modern way to receive triggers in playback software. So, I used a micro-computer powered by PoE that would connect to the show network to facilitate easy setup. The microcomputer serves a website from its IP address for on-site configuration. Additionally, the microcomputer opens up and maintains a reverse ssh tunnel with a remote cloud server for remote management, monitoring, and configuration.

# Implementation

## Application

The application is developed in Javascript and runs via Docker. I used node.js for the server and React for the website. I like using docker-compose to run apps because it makes it very easy. The application consists of two containers: one for the node.js server and the other to serve the react app and host an NGINX reverse proxy.

![Screenshot of the Application](../../images/gpio-to-osc-screenshot.png)

## Hardware

For the first version of the hardware, I used an Odroid C4 though I would have preferred a Raspberry Pi. They are too hard to find right now. A magnetic door sensor triggered the GPIO. I used a PoE to 9V Barrel Connector to provide power. The bits mount directly to a sled that I printed to allow easy fixation to the scenery.
