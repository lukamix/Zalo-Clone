const URI = "https://floating-peak-76068.herokuapp.com/api/v1/";
const URL_BACKEND = "https://floating-peak-76068.herokuapp.com/";
const MAIN_COLOR = "#F048B8";
const SUB_COLOR = "#E078BD";
const BLUE_COLOR = "#46BBFF";
const RED_COLOR = "#FF2424";
const GREY_COLOR = "#DADADA";
const HTTP_STATUS = {
  CONTINUE: "100",
  SWITCHING_PROTOCOLS: "101",
  PROCESSING: "102",
  OK: "200",
  CREATED: "201",
  ACCEPTED: "202",
  NON_AUTHORITATIVE_INFORMATION: "203",
  NO_CONTENT: "204",
  RESET_CONTENT: "205",
  PARTIAL_CONTENT: "206",
  MULTI_STATUS: "207",
  MULTIPLE_CHOICES: "300",
  MOVED_PERMANENTLY: "301",
  MOVED_TEMPORARILY: "302",
  SEE_OTHER: "303",
  NOT_MODIFIED: "304",
  USE_PROXY: "305",
  TEMPORARY_REDIRECT: "307",
  BAD_REQUEST: "400",
  UNAUTHORIZED: "401",
  PAYMENT_REQUIRED: "402",
  FORBIDDEN: "403",
  NOT_FOUND: "404",
  METHOD_NOT_ALLOWED: "405",
  NOT_ACCEPTABLE: "406",
  PROXY_AUTHENTICATION_REQUIRED: "407",
  REQUEST_TIME_OUT: "408",
  CONFLICT: "409",
  GONE: "410",
  LENGTH_REQUIRED: "411",
  PRECONDITION_FAILED: "412",
  REQUEST_ENTITY_TOO_LARGE: "413",
  REQUEST_URI_TOO_LARGE: "414",
  UNSUPPORTED_MEDIA_TYPE: "415",
  REQUESTED_RANGE_NOT_SATISFIABLE: "416",
  EXPECTATION_FAILED: "417",
  UNPROCESSABLE_ENTITY: "422",
  LOCKED: "423",
  FAILED_DEPENDENCY: "424",
  UNORDERED_COLLECTION: "425",
  UPGRADE_REQUIRED: "426",
  PRECONDITION_REQUIRED: "428",
  TOO_MANY_REQUESTS: "429",
  REQUEST_HEADER_FIELDS_TOO_LARGE: "431",
  INTERNAL_SERVER_ERROR: "500",
  NOT_IMPLEMENTED: "501",
  BAD_GATEWAY: "502",
  SERVICE_UNAVAILABLE: "503",
  GATEWAY_TIME_OUT: "504",
  HTTP_VERSION_NOT_SUPPORTED: "505",
  VARIANT_ALSO_NEGOTIATES: "506",
  INSUFFICIENT_STORAGE: "507",
  BANDWIDTH_LIMIT_EXCEEDED: "509",
  NOT_EXTENDED: "510",
  NETWORK_AUTHENTICATION_REQUIRED: "511",
};

function uri_image(path) {
  // console.log(URL_BACKEND + 'files/' + path)
  return URL_BACKEND + "files/" + path;
}

function dtime(datetime) {
  var date = new Date(datetime);
  var datetime = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    mi: date.getMinutes(),
  };
  return datetime;
}

function process_datetime(datetime, option = "") {
  var now = dtime(Date.now());
  var date = dtime(datetime);
  if (
    now.y == date.y &&
    now.m == date.m &&
    now.d == date.d &&
    now.h == date.h &&
    (now.m == date.m) < 30
  ) {
    return "Vừa xong";
  } else if (now.y == date.y && now.m == date.m && now.d == date.d) {
    return date.h + ":" + date.mi;
  } else if (now.y == date.y && now.m == date.m && now.d - date.d < 7) {
    return now.d - date.d + " ngày trước";
  } else if (now.y == date.y && now.m - date.m < 24 && option == "listChat") {
    return now.m - date.m + " tháng trước";
  } else if (option == "posts") {
    return date.d + "/" + date.m + "/" + date.y;
  } else {
    return date.h + ":" + date.mi + " " + date.d + "/" + date.m + "/" + date.y;
  }
}

// console.log(process_datetime("2021-12-19T15:00:00Z"))

module.exports = {
  URI,
  MAIN_COLOR,
  URL_BACKEND,
  SUB_COLOR,
  BLUE_COLOR,
  RED_COLOR,
  GREY_COLOR,
  HTTP_STATUS,
  uri_image,
  process_datetime,
};
