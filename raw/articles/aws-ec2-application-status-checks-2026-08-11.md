---
source_url: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ec2-application-status-checks/
title: Amazon EC2 introduces application status checks
ingested: 2026-08-11
published: 2026-08-10
sha256: 1f4eef1d07b017e30cde644c0a870560750bc4841d1f696ec1630945a73d54aa
tags: [aws, cloud, sre]
---
AWS는 EC2 application status checks가 web server request failure, Docker daemon stopped, incorrect networking configuration, traffic을 전달하지 않는 network interface 같은 application-level issue를 감지한다고 공지함. protocol·port·path·healthy response code를 지정하고 instance ID 또는 tag로 연결하면 EC2가 60초마다 HTTP/HTTPS request를 수행함. Auto Scaling group은 unhealthy application status에 따라 instance replacement를 시작할 수 있으며 제공 범위는 commercial AWS Region과 AWS GovCloud US Region임.
