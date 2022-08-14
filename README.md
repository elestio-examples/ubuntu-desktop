# ubuntu-desktop

<a href="https://dash.elest.io/deploy?source=cicd&social=dockerCompose&url=https://github.com/elestio-examples/ubuntu-desktop"><img src="deploy-on-elestio.png" alt="Deploy on Elest.io" width="180px" /></a>

Example CI/CD pipeline showing how to deploy an Ubuntu Virtual Desktop to elestio.

This comes with several softwares pre-installed:
- Chrome
- Firefox
- VS Code
- Telegram
- Thunderbird
- Wine (Windows compatibility, you can install/run any windows program)

All the data is persisted in ./data on the host

# Once deployed ...

You can connect to your instance with the Web UI:

    https://[CI_CD_DOMAIN]/
    Login: [ADMIN_LOGIN] (set in env var)
    password: [ADMIN_PASSWORD] (set in env var)



&nbsp;

## Credits

This is forked and modified from: https://github.com/kasmtech/workspaces-core-images
