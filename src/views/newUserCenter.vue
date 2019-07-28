<template>
    <Menu :theme="light" active-name="1">
        <MenuItem name="1">
            个人中心
        </MenuItem>
        <MenuItem name="2">
            我的订单
        </MenuItem>
        <MenuItem name="3">
            地址管理
        </MenuItem>
        <MenuItem name="4">
            我的资产
        </MenuItem>
        <MenuItem name="4">
            我的金币
        </MenuItem>
        <MenuItem name="4">
            安全设置
        </MenuItem>
        <MenuItem name="4">
            个人资料
        </MenuItem>
        <MenuItem name="4">
            我的收藏
        </MenuItem>
    </Menu>
</template>
<script>
    export default {
        data () {
            return {
                theme: 'light'
            }
        }
    }
</script>