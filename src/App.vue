<template>
    <div id="app">
        <div>m7s v3.0 alpha</div>
        <Menu
            mode="horizontal"
            :active-name="selectedMenu"
            @on-select="onMenuSelect"
            style="position: fixed; top: 0; right: 0"
        >
            <MenuItem name="home" to="/">{{ $t("menu.home") }}</MenuItem>
            <MenuItem
                name="docs"
                to="http://docs.monibuca.com"
                target="_blank"
                >{{ $t("menu.docs") }}</MenuItem
            >
            <MenuItem
                name="console"
                to="http://demo.monibuca.com"
                target="_blank"
                >{{ $t("menu.demo") }}</MenuItem
            >
            <Submenu name="plugins">
                <template slot="title">{{ $t("menu.plugins") }}</template>
                <MenuItem
                    name="gateway"
                    target="_blank"
                    to="https://github.com/Monibuca/plugin-gateway"
                    >gateway
                </MenuItem>
                <MenuItem
                    name="jessica"
                    target="_blank"
                    to="https://github.com/Monibuca/plugin-jessica"
                    >Jessica
                </MenuItem>
                <MenuItem
                    name="cluster"
                    target="_blank"
                    to="https://github.com/Monibuca/plugin-cluster"
                    >cluster
                </MenuItem>
                <MenuItem
                    name="rtmp"
                    target="_blank"
                    to="https://github.com/Monibuca/plugin-rtmp"
                    >RTMP</MenuItem
                >
                <MenuItem
                    name="logrotate"
                    target="_blank"
                    to="https://github.com/Monibuca/plugin-logrotate"
                    >logrotate
                </MenuItem>
            </Submenu>
            <MenuItem
                name="market"
                to="https://plugins.monibuca.com"
                target="_blank"
                >{{ $t("menu.market") }}</MenuItem
            >
            <MenuItem name="about" to="about">{{
                $t("menu.support")
            }}</MenuItem>
            <Submenu name="language">
                <template slot="title">{{ $t("menu.language") }}</template>
                <MenuItem name="zh">中文</MenuItem>
                <MenuItem name="en">English</MenuItem>
            </Submenu>
        </Menu>
        <router-view class="content"></router-view>
        <div class="footer">Copyright © 2019-2021 dexter 苏ICP备20001212号</div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            selectedMenu: "home",
        };
    },
    mounted() {
        let lang = navigator.language || navigator.userLanguage;
        lang = lang.substr(0, 2);
        if (lang != "zh") {
            this.$i18n.locale = "en";
        }
    },
    methods: {
        onMenuSelect(name) {
            switch (name) {
                case "en":
                case "zh":
                    this.$i18n.locale = name;
            }
        },
    },
};
</script>

<style>
@keyframes linena {
    from {
        stroke-dashoffset: 50;
    }
    to {
        stroke-dashoffset: 0;
    }
}
body,
html {
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    position: relative;
    height: 100%;
}

#app > div:first-child {
    position: absolute;
    top: 10px;
    left: 30px;
    font-size: x-large;
}
.content {
    padding-top: 60px;
}
#shadow14:after {
    content: "Engine";
    position: relative;
    z-index: 100;
}
#shadow15:after {
    content: "RTMP";
    position: relative;
    z-index: 100;
}
#shadow12:after {
    content: "HDL";
    position: relative;
    z-index: 100;
}
#shadow11:after {
    content: "HLS";
    position: relative;
    z-index: 100;
}
#shadow10:after {
    content: "WebSocket";
    position: relative;
    z-index: 100;
}
.footer {
    padding: 10px 0 20px 0;
}
</style>
