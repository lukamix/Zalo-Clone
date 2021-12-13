
const Users = {
  register: "users/register",
  login: "users/login",
  edit: "users/edit",
  change_password: "users/change-password",
  show: "users/show",
  set_block_user: "users/set-block-user",
  set_block_diary: "users/set-block-diary",
  search: "users/search",
};
const Friends = {
  set_request_friend: "friends/set-request-friend",
  get_requested_friend: "friends/get-requested-friend",
  set_accept: "friends/set-accept",
  set_remove: "friends/set-remove",
  list: "friends/list",
};

const PostComment = {};
const PostLike = {};
const PostReport = {};
const Posts = {
  create: "posts/create",
  list: "posts/list",
  delete: "posts/delete",
  like: 'postLike/action'
};
const Chats = {
  listChats: "chats/listChats",
  messages: "chats/getMessages",
  send: "chats/send"
};

module.exports = {
    Users,
    Friends,
    PostComment,
    PostLike,
    PostReport,
    Posts,
    Chats,
}
