#!/bin/sh

# Strict shell settings.
set -e pipefall;
set -u pipefall;

UID=1001
GID=1001
USER=reactle
GROUP=reactle

# Enable print for all executed commands
trace_on() { set -x;}
# Disable print for all executed commands
trace_off() { set +x;}

add_custom_user_group() {
    addgroup -g $GID -S $GROUP
    adduser -S -D -H \
        -u $UID \
        -G $GROUP \
        -s /sbin/nologin \
        -h /var/cache/nginx \
        $USER
}

add_user_permission() {
    chown -R $USER:$GROUP \
        /usr/share/nginx \
        /var/cache/nginx \
        /var/log/nginx \
        /etc/nginx
}

trace_on
    add_custom_user_group
    add_user_permission
trace_off
