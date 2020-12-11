<template>
    <div style="display: inline-block">
        <el-button type="text" icon="el-icon-copy-document" v-clipboard:copy="copydata" v-clipboard:success="copySuccess" v-clipboard:error="copyError"></el-button>
    </div>
</template>

<script>
export default {
    props: ['copydata'],
    name: 'CopyBoard',
    data() {
        return {}
    },
    methods: {
        copySuccess() { // 复制成功
            this.$message({
                message: '复制成功！',
                type: 'success'
            })
        },
        copyError() { // 复制失败
            this.$message({
                message: '复制失败！',
                type: 'error'
            })
        }
    }
}
</script>
