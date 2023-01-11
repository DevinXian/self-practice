#!/bin/bash
CRON_LABEL='build_reporter'
CRON_JOB="$PWD/runner.sh"

crontab_exists() {
  crontab -l 2>/dev/null | grep "$CRON_LABEL" >/dev/null 2>/dev/null
}

if crontab_exists; then 
  printf '\e[1;33m%-12s\e[m\n\n' "${CRON_LABEL} 重复设置，已忽略~"
else 
  crontab -l | { cat; echo "* * * * * ${CRON_JOB} ${CRON_LABEL}"; } | crontab -
fi

exit 0
