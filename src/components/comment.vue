<template>
    <div class="container">
        <div class="input-container">
            <div>
                <el-input type="textarea" v-model="content" rows="5" placeholder="请输入评论"/>
                <!--                <div class="operate">-->
                <!--                    <el-button @click="send">提交</el-button>-->
                <!--                </div>-->
            </div>
            <div class="operate">
                <el-button @click="send">提交</el-button>
            </div>
        </div>
        <div class="comments">
            <div class="count" v-text="comments.length + ' 评论'"></div>
            <div class="item" v-for="item in comments" :key="item.id">

                <div class="item-info">
                    <div class="avatar">
                        <el-avatar :size="35" :src="item.avatar"></el-avatar>
                    </div>
                    <div class="info">
                        <div class="name" v-text="item.name"></div>
                        <div class="date" v-text="item.date"></div>
                    </div>
                </div>
                <div class="content-container">
                    <div class="content" v-text="item.content"></div>
                    <div>
                        <el-button type="text" class="delete" @click="del(item.id)">删除</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "comment",
        data() {
            return {
                comments: [
                    {
                        id: 1,
                        avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20190713/fcff26b735e845ff9e1deb36d9a8fe0b.jpeg',
                        name: '章鱼哥',
                        content: '还不错',
                        date: '1小时前'
                    }
                ],
                content: null
            }
        },

        methods: {
            send() {
                this.comments.push({
                    id: this.comments.length + 1,
                    avatar: 'http://5b0988e595225.cdn.sohucs.com/images/20190713/fcff26b735e845ff9e1deb36d9a8fe0b.jpeg',
                    name: '章鱼哥',
                    content: this.content,
                    date: '1小时前'
                })
            },
            del(id) {
                this.$confirm('此操作将永久删除该评论, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    this.comments = this.comments.filter(comment => comment.id !== id);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .input-container {
        padding: 0 20px;
    }

    .input {
        background-color: white;
        border-radius: 10px;
        border: 1px solid #c0c4cc;
    }

    .operate {
        display: flex;
        justify-content: flex-end;
        padding: 10px 0;
    }

    .textarea {
        margin: 5px 0;
    }

    .comments {
        padding: 10px 20px;
    }

    .count {
        padding: 5px;
    }

    .item-info {
        display: flex;
    }

    .info {
        margin: 0 10px;
        font-size: 10px;
    }

    .date {
        color: gray;
    }

    .content {
        margin: 10px 43px;
    }

    .item {
        margin: 20px 0;
    }

    .delete {
        color: #f56c6c;
    }

    .content-container {
        display: flex;
        justify-content: space-between;
    }
</style>