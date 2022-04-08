var http = require("http");
var express = require("express");
var app = express();
const fs = require("fs");
const FormData = require("form-data");
var request = require("request");
var unirest = require("unirest");
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
var axios = require("axios").default;
const qs = require("querystring");
var jsonData = require("./match.json");
const cors = require("cors");
axios.defaults.timeout = 5000;
app.use(cors());
var jsonurl = "http://3.111.121.120/json/teenpatti.json";
var cookies =
  "laravel_session=eyJpdiI6Ik0yQk5LY0lJdTNOZExcL2JmcFhUUm5nPT0iLCJ2YWx1ZSI6Ik5mWWFiUTVVNnNnZllLYUwzME5SU0ZaRFVHY3QxMFBvYmZWMTdBNm1vSW50UGhkMFhVVms0VEtIbFhPaDJKcFciLCJtYWMiOiI3OTY0ZjhmOWNlOTQxNDAxOTczMzAxOWExMzY4Zjk1ODM5OGRiYTAwZDMxNDFmMzRkMjZhNjI3NzgxZmI2MmI3In0%3D;rememberMe=true;betToken=eyJpdiI6InZxRkpzTlQrNm0rNjM0TmRNVlpyQ2c9PSIsInZhbHVlIjoiOTE0dWNiZ0FQZENCYnRhQndkdExqZz09IiwibWFjIjoiNzg5N2M5NzQxNTdiNWE2MzI2ZGMwOGQ1NmY3ZGM0YTExZWNiMTkxNjQxYmZmNDM1NWM4YmYwMmIxYTU1MDViMSJ9;XSRF-TOKEN=eyJpdiI6InZNcFBScFFwaHJIK2hMeGE5WHRLb3c9PSIsInZhbHVlIjoiNm1mVVNtNVwvMWFjNnFhYzhnNFNLZUZsRFE3SVhqc2tcLysxcFYzQ2U1Ymk0WGttdUd2TDVVYWw4TkF4WGVjK3FCIiwibWFjIjoiMmMyOGFlYTQxYzMyNTZkN2ZmYTY5NGVmYjQ0ODkxOTU2ZGRlNTQyZTNmOGI1Y2ExYjFlNjgxMDk2ODRlYzQ4ZSJ9;__cfduid=ddaa3a363a354ad05064e2321eadb99f91582436747;";
var token = " oKdHG2RZ5lDdOZV1pNVqJWnyTs2RyTClUrCKuBVe";
var siteurl = "https://bestbet9.com/";

var eckey = "qtu18TIJtuiPYzc4ae5c6WsRTY";

var key = "qtu18TIJtuiPYzc4ae5c6WsRTY";

var cookies1 =
  ".AspNetCore.Antiforgery.DwWF5WbmKwk=CfDJ8L4MRezwggNCu2EUJM9L8s9WLpK97G6VVyI3eTLtEuXbCMCd5iW6k3GO-C8MVeMNlv9gUYmzTJrOev-OIX2q51Jxbx9I8Vr81xYw4XMCy__XBnFh-6x7rGru5PvFm0qmyFaYhc1kRwALuMbIkZ7LiMA; wexauthtoken=e29b1c1f-2109-4263-b69d-cafd0ee23aaf";

var procookies =
  "xwexauthtoken=92e659bb-f6e0-4557-8a8d-c748c166f0e5; Path=/; Domain=betproexch.com; Expires=Mon, 14 Sep 2020 12:37:01 GMT;";
var pro_token = "";

app.listen(3000, () => {
  console.log("Server running on port 3000_new");
  ReadSession();
  // LoginBetPro();
  //console.log(jsonData);
});
//http://localhost:8080/casino?type=teen20/teen
app.get("/test", (req, res, next) => {
  try {
    var aaa =
      "ClIPfmTtq8V9RcK+QLXBSy9GR9YhaYul8vJcJw2wgFA=##@##cafbc748f82d5be3##@##a808c004b0469f5365b0db796aa1f03d";

    data =
      "ftseykjPKfn033xt2wHRgHjz/dz/p3R2XIzbYahD7e0=##@##274fcd2677564f2d##@##ae272edd968c46d530091d39374d784e";
    data =
      "8LXZvkt7d687Q2lOxrqkJMtpRMsvQrVj37N88E+BaiEqdBqxPIu7pdSMj7L5c9HO##@##b3dc7434c7484e33##@##96e2d844293213192f12f18c7250f74c";
    data =
      "KuQiJw8dLq40cLTDv45kiXtMpxVxFeeZk6yC5qw+RNA=##@##1ef89f086bfbea97##@##b22f2fb74b73affdf5c610676eeacaeb";
    data =
      "Oid6O8CjwnnbFMNkIbaCKiTThEH9072sSQL/t8Cs3mI=##@##b695d3c54133a719##@##7df9e31fba54f5a5427555cda767ca16";
    data =
      "dZ75aMBCTJ3wl77GCgrlLg2omhgwowtXMHVZSyjJq68=##@##1f84ba51d9dfc7c5##@##0fd77b8bba0c60fd9d580498fe8266dc";
    data =
      "QHWwdcomqebqKvDA4ivYfEQ3KnSv8HJMvo+Ft+Dn310=##@##ce4f26052040b7e7##@##ea910ab34a81689316baa9907a2c610a";
    data =
      "DRpRm7V2xchR6GRdq3fnC/OQxt3SW/GLno+jb2BShho=##@##40c9921af7a8e87a##@##80148b8e43f813e427abb547f0927a1d";

    data =
      "wyPOuMkQGbZ7bxhlBEYk1vnD7CqEKkW/bKRUTjykZ5bCaonattIy/ms/e4w941yTWWcV7z6oQvtUYYIB8K+G/A==##@##fd0aa0759adf2d96##@##a8112a7f026b3f6fb7b28afa4bb6c819";
    var str = JSON.parse(
      CryptoJS.AES.decrypt(data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
        format: CryptoJSAesJson,
      }).toString(CryptoJS.enc.Utf8)
    );
    res.json(str);
  } catch (ex) {
    console.log(ex);
    res.status(200).json({}).end();
  }
});

//http://localhost:8080/casino?type=teen20/teen
app.get("/casino", (req, res, next) => {
  var data;
  if (req.query.type == "teen20") {
    data =
      "+V7HpM3Assejz6x7wzLZj/c4YQkpRdPr8kaNP5mvvKQ=##@##08e4a1ce78b42c15e06a9e0088f193ac##@##1a6b8ec7d52ae6cb";
  } else if (req.query.type == "teen") {
    data =
      "a1Hskkm1dkw4ig5V08WAETJaR1bIKeoif1DJYxIulBk=##@##d0143d8aae8820d9fbd6d2d38bc6ec66##@##1e830f3362f568a3";
  } else if (req.query.type == "card32")
    data =
      "+Cqju8H8Jee9eQJhqXQ09P3QYcZ0y5iEdNXFDaEBgbE=##@##d5d7b4781d6e0d7ca9ce7a55e006d63e##@##528589992a78e97d";
  else if (req.query.type == "poker")
    data =
      "7z7sx1zV0Pi9XuUMZAFeWN4RhZVRZYAYGi3dUBQsxpA=##@##b05e590a328c340dc552651031a1fbc9##@##26175470ad419b4c";
  else if (req.query.type == "poker20")
    //poker20
    data =
      "KuQiJw8dLq40cLTDv45kiXtMpxVxFeeZk6yC5qw+RNA=##@##b22f2fb74b73affdf5c610676eeacaeb##@##1ef89f086bfbea97";
  else if (req.query.type == "lucky7eu")
    data =
      "yImHk+1EyeYDk6KcmO4h/pwyfS2IEFJUfUIkSFWAilI=##@##9e175ebaf89900f2cca627ee032a5834##@##f8af208c2600dbdb";
  else if (req.query.type == "dt6")
    //1daygragntiger
    data =
      "R3YKTFI2UzbHtSoyn4oCWbPCzi8QGwqgnZQFImkr7G4=##@##b1285ea414b168757cda85156224784f##@##9db7c0e7535a9b68";
  else if (req.query.type == "dt202")
    //1daygragntiger
    data =
      "Oid6O8CjwnnbFMNkIbaCKiTThEH9072sSQL/t8Cs3mI=##@##7df9e31fba54f5a5427555cda767ca16##@##b695d3c54133a719";
  else if (req.query.type == "aaa")
    //AMAR AKBAR ANTHONY
    data =
      "FKe4bMZvs3A4Nyg82mrQcMDtscy0WOuVel2X/vRW3N8=##@##fd1ca360670e86b7ee93b3fd9579ea8d##@##3edd639a6417bba0";
  else if (req.query.type == "card32eu")
    //32 card B
    data =
      "pG63z/Rc7glKA8KuAIjauVa41i71J91AMJseknURbrk=##@##4f3b5c5c9b88df9fb5f2b6c12d0dcaf6##@##4decad0800edc9c6";
  else if (req.query.type == "war")
    //CASINO WAR
    data =
      "ftseykjPKfn033xt2wHRgHjz/dz/p3R2XIzbYahD7e0=##@##ae272edd968c46d530091d39374d784e##@##274fcd2677564f2d";
  else if (req.query.type == "abj")
    //anderbhar b
    data =
      "VAAs7MKIZyjS0oka/6ZeQHTVgI6/joq5sLoad3iYITc=##@##5bc166e7af517d92692ac3a27e5959ae##@##421bc0d6450e676d";

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  const requestBody = {
    //gameType: req.query.type
    data: data,
  };
  var surl = siteurl + "api/casion/getcasinodata";
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      Cookie: cookies,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Connection: "keep-alive",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": token,
    },
    /*  ,
    proxy: {
      host: "49.248.154.236",
      port: 80
    }
    */
  };

  axios
    .post(surl, qs.stringify(requestBody), config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }
        var str = JSON.parse(
          CryptoJS.AES.decrypt(result.data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
            format: CryptoJSAesJson,
          }).toString(CryptoJS.enc.Utf8)
        );
        //res.send(str)
        res.json(str);

        //var data = incrypt(JSON.stringify(result.data))
        // res.send(data)
        //res.json(result.data)
        //res.send(result.data)
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      res.status(200).json({}).end();
      // Do somthing
    });
});

//http://localhost:8080/casinoresult?type=teen20/teen
app.get("/casinoresult", (req, res, next) => {
  var data;
  if (req.query.type == "teen20")
    data =
      "+V7HpM3Assejz6x7wzLZj/c4YQkpRdPr8kaNP5mvvKQ=##@##08e4a1ce78b42c15e06a9e0088f193ac##@##1a6b8ec7d52ae6cb";
  else if (req.query.type == "teen")
    data =
      "a1Hskkm1dkw4ig5V08WAETJaR1bIKeoif1DJYxIulBk=##@##d0143d8aae8820d9fbd6d2d38bc6ec66##@##1e830f3362f568a3";
  else if (req.query.type == "card32")
    data =
      "+Cqju8H8Jee9eQJhqXQ09P3QYcZ0y5iEdNXFDaEBgbE=##@##d5d7b4781d6e0d7ca9ce7a55e006d63e##@##528589992a78e97d";
  else if (req.query.type == "poker")
    data =
      "7z7sx1zV0Pi9XuUMZAFeWN4RhZVRZYAYGi3dUBQsxpA=##@##b05e590a328c340dc552651031a1fbc9##@##26175470ad419b4c";
  else if (req.query.type == "poker20")
    //poker20
    data =
      "KuQiJw8dLq40cLTDv45kiXtMpxVxFeeZk6yC5qw+RNA=##@##b22f2fb74b73affdf5c610676eeacaeb##@##1ef89f086bfbea97";
  else if (req.query.type == "lucky7eu")
    data =
      "yImHk+1EyeYDk6KcmO4h/pwyfS2IEFJUfUIkSFWAilI=##@##9e175ebaf89900f2cca627ee032a5834##@##f8af208c2600dbdb";
  else if (req.query.type == "dt6")
    //1daygragntiger
    data =
      "R3YKTFI2UzbHtSoyn4oCWbPCzi8QGwqgnZQFImkr7G4=##@##b1285ea414b168757cda85156224784f##@##9db7c0e7535a9b68";
  else if (req.query.type == "dt202")
    //1daygragntiger
    data =
      "Oid6O8CjwnnbFMNkIbaCKiTThEH9072sSQL/t8Cs3mI=##@##7df9e31fba54f5a5427555cda767ca16##@##b695d3c54133a719";
  else if (req.query.type == "aaa")
    //AMAR AKBAR ANTHONY
    data =
      "FKe4bMZvs3A4Nyg82mrQcMDtscy0WOuVel2X/vRW3N8=##@##fd1ca360670e86b7ee93b3fd9579ea8d##@##3edd639a6417bba0";
  else if (req.query.type == "card32eu")
    //32 card B
    data =
      "pG63z/Rc7glKA8KuAIjauVa41i71J91AMJseknURbrk=##@##4f3b5c5c9b88df9fb5f2b6c12d0dcaf6##@##4decad0800edc9c6";
  else if (req.query.type == "war")
    //CASINO WAR
    data =
      "ftseykjPKfn033xt2wHRgHjz/dz/p3R2XIzbYahD7e0=##@##ae272edd968c46d530091d39374d784e##@##274fcd2677564f2d";
  else if (req.query.type == "abj")
    //anderbhar b
    data =
      "dZ75aMBCTJ3wl77GCgrlLg2omhgwowtXMHVZSyjJq68=##@##0fd77b8bba0c60fd9d580498fe8266dc##@##1f84ba51d9dfc7c5";

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const requestBody = {
    data: data,
  };
  var surl = siteurl + "api/casion/getlastresult";
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      Cookie: cookies,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Connection: "keep-alive",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": token,
    },
  };

  axios
    .post(surl, qs.stringify(requestBody), config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }
        var str = JSON.parse(
          CryptoJS.AES.decrypt(result.data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
            format: CryptoJSAesJson,
          }).toString(CryptoJS.enc.Utf8)
        );

        res.send(str);
        //var data = incrypt(JSON.stringify(result.data))
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      res.status(200).json({}).end();
      // Do somthing
    });
});

//http://localhost:3000/odds?event=232323
app.get("/odds", (req, res, next) => {
  var data;

  var recd = jsonData.find((x) => x.Eventid == req.query.event);
  if (recd) {
    console.log(recd);
    data = recd.code;
  }
  var jstr = '{"gameId":"' + req.query.event + '","fn":0,"ism":0,"dataid":"0"}';
  var data = incrypt(jstr);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const requestBody = {
    // gameId: req.query.event
    data: data,
  };
  var surl = siteurl + "api/game/getdata";
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
      Cookie: cookies,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Connection: "keep-alive",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": token,
    },
  };

  axios
    .post(surl, qs.stringify(requestBody), config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }
        var str = JSON.parse(
          CryptoJS.AES.decrypt(result.data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
            format: CryptoJSAesJson,
          }).toString(CryptoJS.enc.Utf8)
        );
        //res.json(str);
        var mdata = convert(str.original);
        //var mdata = convert(result.data)

        res.json(mdata);
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      res.status(200).json({}).end();
      // Do somthing
    });
});

//http://localhost:3000/oddscricketv2?event=561006725
app.get("/oddscricketv2", (req, res, next) => {
  var data;

  var recd = jsonData.find((x) => x.Eventid == req.query.event);
  if (recd) {
    console.log(recd);
    data = recd.code;
  }
  //{"gameId":"561006725","fn":0,"ism":0,"gameType":"cricketv2"}
  var jstr =
    '{"gameId":"' +
    req.query.event +
    '","fn":0,"ism":0,"gameType":"cricketv2"}';
  var data = incrypt(jstr);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const requestBody = {
    // gameId: req.query.event
    data: data,
  };

  //https://shriexch.com/api/cricketv/data
  var surl = siteurl + "api/cricketv/data";
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      Cookie: cookies,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Connection: "keep-alive",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": token,
    },
  };

  axios
    .post(surl, qs.stringify(requestBody), config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }
        var str = JSON.parse(
          CryptoJS.AES.decrypt(result.data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
            format: CryptoJSAesJson,
          }).toString(CryptoJS.enc.Utf8)
        );
        //res.json(str);
        var mdata = convertcricketv(str.original);
        //var mdata = convert(result.data)

        res.json(mdata);
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      res.status(200).json({}).end();
      // Do somthing
    });
});

//http://localhost:3000/oddsbook?event=232323
app.get("/oddsbook", (req, res, next) => {
  var data;

  var jstr = '{"gameId":"' + req.query.event + '","fn":0,"ism":0,"dataid":"0"}';
  var data = incrypt(jstr);

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const requestBody = {
    data: data,
  };
  var surl = siteurl + "api/game/getdata";
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      Cookie: cookies,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Connection: "keep-alive",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": token,
    },
  };

  axios
    .post(surl, qs.stringify(requestBody), config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }
        var str = JSON.parse(
          CryptoJS.AES.decrypt(result.data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
            format: CryptoJSAesJson,
          }).toString(CryptoJS.enc.Utf8)
        );
        //res.json(str);
        // var mdata = convertBook(result.data)
        var mdata = convertBook(str.original);
        res.json(mdata);
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      res.status(200).json({}).end();
      // Do somthing
    });
});

//http://localhost:8080/url?marketid=1.166411976
app.get("/url_old", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const requestBody = {
    _token: token,
    sesid: req.query.marketid,
  };
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      Cookie: cookies,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Connection: "keep-alive",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  axios
    .post(siteurl, qs.stringify(requestBody), config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }
        var str = JSON.parse(
          CryptoJS.AES.decrypt(result.data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
            format: CryptoJSAesJson,
          }).toString(CryptoJS.enc.Utf8)
        );
        var mdata = convert(str.original);
        res.json(mdata);
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      res.status(200).json({}).end();
      // Do somthing
    });
});

function ReadSession() {
  request.get(
    jsonurl,
    {
      timeout: 1500,
    },
    function (error, response, data) {
      if (error) {
        console.log(error.code === "ETIMEDOUT");
        console.log(error.connect === true);
        ReadSession();
      }
      try {
        //   var data='[{"siteurl":"http://bestbet9.com/","user":"ALI00772","pws":"Hmaster123","type":"teenpatti","cookis":"__cfduid=d2f39a85bbabce143950386f254f33dbc1600158133;XSRF-TOKEN=eyJpdiI6IlpsYmJTK0VQRGJrbE9rdm5IVEpBXC93PT0iLCJ2YWx1ZSI6IkNWOGY5SUJWOVJWR3haWFZoSFNDaWJ6bVJKaWJaTnlQZzNCNEU4QVI1XC9QdkNUSGsyWUZxcW5PaXFoSm00WXVZIiwibWFjIjoiNjc0ODUzZDVkNmQzNzA0MzUwY2E3MTEyMmE2M2ViMjQyZWNmMTM5YTNmNWZlYmM1YTdlYTQyNjY3YTczNzAzYSJ9;laravel_session=eyJpdiI6IjA1NCtrTHRqb2t5WFVOb0hqYXhlQUE9PSIsInZhbHVlIjoiTUVIcG5HWjVsbDZaMmlOSWNMK255MzBjckFDOEpEa1dTYkFrY1l2Rmh2K3JQUHVMTVh6aDJsZUZGc3BIeUF0NiIsIm1hYyI6ImZhOTlhNTE1OWRlNmY3ODg5MTdlODExOTYyZDJhODg3YTczNzIwOTlhMWRmMWYxYTI4YWZmNjVmYmE0OTc2NjYifQ%3D%3D;betToken=eyJpdiI6InNabXFYbDQwc0NqWlpQSDdGaHV2ZVE9PSIsInZhbHVlIjoiK3hwd2JcL1NmdUxScE8wcmlhdzdZZmc9PSIsIm1hYyI6IjliYzQxNmJlMWU2NDQ3MTJhNWI5MDM4ZWM4Y2EwOWM2NmRjMzE3NjQzYmYwNjk5MGMwNDdhNGI5MGNkZDk5OTMifQ%3D%3D;rememberMe=true;","key":"175db956bf3ed19d1e3c7c1d7bdb30f8de7ca0b1","token":"VQQj037n6pqqh0HQT3VQ5Nx6x5Esuhz1do6Vp2lo"},{"siteurl":"http://betproexch.com/","user":"Ali3666","pws":"Ali36","type":"odds2","cookis":"wexauthtoken=c0339e81-ba59-4abb-3985f-11ca112d48ab;.AspNetCore.Antiforgery.WB3LOLBL3Fk=CfDJ8HqAFHavdWJHlTEZfiEueXCXjbmcmzTtP9tKrvHh-fwVG31MjQXvs_fGyIdxBLRgRMHOTSeyW3MfT3d2eTWyDNzJ8wCp705tO3Kg9yO9fYOIiZPJAl16vx_vh1i7yWE6IZ66juYNVjJme0vmCYw0Zfr0;","key":"","token":""}]'
        var dd = JSON.parse(data);
        cookies = dd[0].cookis;
        token = dd[0].token;
        siteurl = dd[0].siteurl;
        console.log(dd);
        // cookies1 = dd[1].cookis
      } catch (e) {}
    }
  );
}
function convertcricketv(mydata) {
  var MyObj = new Object();
  try {
    if (mydata.success) {
      var mlist = [];
      var m = new Object();
      var mev = [];
      if (mydata.data.t2.length > 0) {
        var mkt = mydata.data.t2[0].bm1;
        var mst = mkt.sh;
        mkt.sort(function (a, b) {
          return parseInt(a.sr) - parseInt(b.sr);
        });
        mkt.forEach((r) => {
          if (r.mname.toLowerCase() === "bookmaker") {
            m.marketId = r.mid;
            m.inplay = "true";
            m.priceStatus = "OPEN";
            var ev = new Object();
            ev.RunnerName = r.nat;
            ev.SelectionId = r.sid;

            var ss = intTodesc(r.l1.toString());
            ev.LayPrice1 = intTodesc(r.l1.toString());
            ev.LaySize1 = r.ls1.toString();

            ev.LayPrice2 = intTodesc(r.l2.toString());
            ev.LaySize2 = r.ls2.toString();

            ev.LayPrice3 = intTodesc(r.l3.toString());
            ev.LaySize3 = r.ls3.toString();

            ev.BackPrice1 = intTodesc(r.b1.toString());
            ev.BackSize1 = r.bs1.toString();

            ev.BackPrice2 = intTodesc(r.b2.toString());
            ev.BackSize2 = r.bs2.toString();

            ev.BackPrice3 = intTodesc(r.b3.toString());
            ev.BackSize3 = r.bs3.toString();
            mev.push(ev);
          }
        });
      }
      m.events = mev;
      mlist.push(m);
      MyObj.market = mlist;

      var sslist = [];
      var dada = mydata.data.t3;

      if (dada != null) {
        dada.forEach((item) => {
          if (item.ballsess == "1") {
            var ss = new Object();
            ss.SelectionId = item.sid;

            ss.RunnerName = item.nat;

            ss.GameStatus = "";

            ss.LayPrice1 = parseInt(item.l1, 10).toString();
            ss.LaySize1 = parseInt(item.ls1, 10).toString();
            ss.BackPrice1 = parseInt(item.b1, 10).toString();
            ss.BackSize1 = parseInt(item.bs1, 10).toString();
            if (parseInt(item.b1, 10) < 1 && parseInt(item.l1, 10) < 1)
              ss.GameStatus = "SUSPANDED";
            if (item.min == "0") ss.GameStatus = "SUSPANDED";
            sslist.push(ss);
          }
        });
        MyObj.session = sslist;
      }
    }
  } catch (exp) {
    console.log(exp);
    return MyObj;
  }

  return MyObj;
}
function convertBook(mydata) {
  var MyObj = new Object();
  try {
    if (mydata.success) {
      var mkt = mydata.data.t2[0].bm1;
      var mlist = [];
      var m = new Object();
      var mev = [];
      var mst = mkt.sh;
      mkt.sort(function (a, b) {
        return parseInt(a.sr) - parseInt(b.sr);
      });
      mkt.forEach((r) => {
        if (r.mname.toLowerCase() === "bookmaker") {
          m.marketId = r.mid;
          m.inplay = "true";
          m.priceStatus = "OPEN";
          var ev = new Object();
          ev.RunnerName = r.nat;
          ev.SelectionId = r.sid;

          var ss = intTodesc(r.l1.toString());
          ev.LayPrice1 = intTodesc(r.l1.toString());
          ev.LaySize1 = r.ls1.toString();

          ev.LayPrice2 = intTodesc(r.l2.toString());
          ev.LaySize2 = r.ls2.toString();

          ev.LayPrice3 = intTodesc(r.l3.toString());
          ev.LaySize3 = r.ls3.toString();

          ev.BackPrice1 = intTodesc(r.b1.toString());
          ev.BackSize1 = r.bs1.toString();

          ev.BackPrice2 = intTodesc(r.b2.toString());
          ev.BackSize2 = r.bs2.toString();

          ev.BackPrice3 = intTodesc(r.b3.toString());
          ev.BackSize3 = r.bs3.toString();
          mev.push(ev);
        }
      });

      m.events = mev;
      mlist.push(m);
      MyObj.market = mlist;

      var sslist = [];
      var dada = mydata.data.t3;

      if (dada != null) {
        dada.forEach((item) => {
          if (item.ballsess == "1") {
            var ss = new Object();
            ss.SelectionId = item.sid;

            ss.RunnerName = item.nat;

            ss.GameStatus = item.gstatus;

            ss.LayPrice1 = parseInt(item.l1, 10).toString();
            ss.LaySize1 = parseInt(item.ls1, 10).toString();
            ss.BackPrice1 = parseInt(item.b1, 10).toString();
            ss.BackSize1 = parseInt(item.bs1, 10).toString();
            if (item.min == "0") ss.GameStatus = "SUSPANDED";
            sslist.push(ss);
          }
        });
        MyObj.session = sslist;
      }
    }
  } catch (exp) {
    console.log(exp);
    return MyObj;
  }

  return MyObj;
}

function intTodesc(data) {
  if (data != "" && data != "0.00") {
    var dc = parseFloat(data);
    return (dc / 100 + 1).toFixed(2);
  } else return data;
}

function convert(mydata) {
  var MyObj = new Object();
  try {
    if (mydata.success) {
      var mkt = mydata.data.t1;
      var mlist = [];
      var m = new Object();
      var mev = [];
      mkt.forEach((mm) => {
        mm.sort(function (a, b) {
          console.log(a.srno);
          return parseFloat(a.srno) - parseFloat(b.srno);
        });
        mm.forEach((r) => {
          if (r.mname == "MATCH_ODDS") {
            m.marketId = r.mid;
            m.inplay = r.iplay;
            m.priceStatus = r.mstatus;
            var ev = new Object();
            ev.RunnerName = r.nat;
            ev.SelectionId = r.sid;

            ev.LayPrice1 = r.l1.toString();
            ev.LaySize1 = r.ls1.toString();

            ev.LayPrice2 = r.l2.toString();
            ev.LaySize2 = r.ls2.toString();

            ev.LayPrice3 = r.l3.toString();
            ev.LaySize3 = r.ls3.toString();
            ev.BackPrice1 = r.b1.toString();
            ev.BackSize1 = r.bs1.toString();

            ev.BackPrice2 = r.b2.toString();
            ev.BackSize2 = r.bs2.toString();

            ev.BackPrice3 = r.b3.toString();
            ev.BackSize3 = r.bs3.toString();
            mev.push(ev);
          }
        });
      });
      m.events = mev;
      mlist.push(m);
      MyObj.market = mlist;

      var sslist = [];
      var dada = mydata.data.t3;

      if (dada != null) {
        dada.forEach((item) => {
          //if (item.ballsess == "False") {
          if (item.ballsess == "1") {
            var ss = new Object();
            ss.SelectionId = item.sid;

            ss.RunnerName = item.nat;

            ss.GameStatus = item.gstatus;

            ss.LayPrice1 = parseInt(item.l1, 10).toString();
            ss.LaySize1 = parseInt(item.ls1, 10).toString();
            ss.BackPrice1 = parseInt(item.b1, 10).toString();
            ss.BackSize1 = parseInt(item.bs1, 10).toString();
            if (item.min == "0") ss.GameStatus = "SUSPANDED";
            sslist.push(ss);
          }
        });
        MyObj.session = sslist;
      }
    }
  } catch (exp) {
    console.log(exp);
    return MyObj;
  }

  return MyObj;
}

var CryptoJSAesJson = {
  parse: function (data) {
    var items = data.split("##@##");
    var str = CryptoJS.lib.CipherParams.create({
      ciphertext: CryptoJS.enc.Base64.parse(items[0]),
    });
    if (items[2]) {
      str.iv = CryptoJS.enc.Hex.parse(items[2]);
    }

    if (items[1]) {
      str.salt = CryptoJS.enc.Hex.parse(items[1]);
    }
    return str;
  },
};

function incrypt(jstr) {
  var enc = CryptoJS.AES.encrypt(jstr, key, {
    format: CryptoJSAesJson,
  });
  var xx = {
    ct: enc["ciphertext"].toString(CryptoJS.enc.Base64),
  };
  if (enc.iv) xx.iv = enc.iv.toString();
  if (enc.salt) xx.s = enc.salt.toString();

  return xx.ct + "##@##" + xx.iv + "##@##" + xx.s;
}

function ReadJSON() {
  fs.readFile("match.json", (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
  });
}

//http://localhost:3000/betproexodds?market=1.168743348
app.get("/prologin", (req, res, next) => {
  var market = req.query.market;
  //var cookies1 = "cookies1";
});

function LoginBetPro() {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const requestBody = JSON.stringify({
    Username: "Mximran60",
    Password: "Mximran60",
  });

  var surl = "https://betproexch.com/api/Users/authenticate";
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      "Content-Type": "application/json;",
      Connection: "keep-alive",
    },
  };

  axios
    .post(surl, requestBody, config)
    .then((result) => {
      try {
        pro_token = result.data.token;
        procookies =
          result.headers["set-cookie"][0] + ";wexauthtoken=" + pro_token;
      } catch (ex) {
        console.log(exp);
        //  res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      // res.status(200).json({}).end();
      // Do somthing
    });
}

//http://localhost:3000/betproexodds?market=1.168743348
app.get("/betproexodds", (req, res, next) => {
  var market = req.query.market;
  //var cookies1 = "cookies1";
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  axios
    .get(
      "https://prices2.mgs11.com/api/Markets/Data?id=" +
        //  "https://prices3.betproexch.com/api/Markets/Data?id=" +
        market +
        "&token=" +
        pro_token +
        ""
    )

    //axios.post(surl, requestBody, config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }

        var mdata = convertBetPro(result.data, market);

        res.json(mdata);
        // res.json(result.data);
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      if (
        (err.response && err.response.status == 401) ||
        err.response.status == 400
      ) {
        LoginBetPro();
      }
      res.status(200).json({}).end();
      // Do somthing
    });
});
//http://localhost:3000/betprodds/1.168743348
app.get("/betprodds/:mkid", (req, res, next) => {
  var market = req.params.mkid;
  var markets = market.split(",");

  var data = JSON.stringify(markets);
  var config = {
    method: "post",
    url: "https://betproexch.com/api/Markets/Books",
    headers: {
      Authorization: "Bearer " + pro_token,
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      try {
        if (response.data.error == "Unauthenticated.") {
          LoginBetPro();
          res.status(200).json({}).end();
        }
        // var mydata = BetProToBetfair(response.data);
        res.json(response.data);
        //res.json(mydata);
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch(function (error) {
      if (error.response && error.response.status == 401) {
        LoginBetPro();
      }
      res.status(200).json({}).end();
    });
});

//http://localhost:3000/getRate/1.168743348
app.get("/getRate/:mkid", (req, res, next) => {
  var market = req.params.mkid;
  var markets = market.split(",");
  var config = {
    method: "get",
    url: "http://159.69.72.39:5000/getMarketBookWithCataloge/" + market,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      var mydata = getRateToBetfair(response.data);
      // res.json(response.data);
      res.json(mydata);
    })
    .catch(function (error) {
      console.log(error);
    });
});

function getRateToBetfair(mydata) {
  var MainObj = [];
  //var mktbook = mydata.marketBooks;
  var mktbook = mydata;
  mktbook.forEach((mms) => {
    mms.marketBooks.forEach((mm) => {
      var mkt = new Object();
      mkt.marketId = mm.id;
      mkt.isMarketDataDelayed = mm.isMarketDataDelayed;
      mkt.status = mm.status;
      if (mm.marketStatus == "InPlay") mkt.status = "OPEN";
      mkt.betDelay = mm.betDelay;
      mkt.bspReconciled = false;
      mkt.complete = true;
      mkt.isInplay = false;
      //if (mm.marketStatus == "InPlay")
      //m.inplay = true;
      //else m.inplay = false;
      mkt.inplay = false;
      mkt.totalAvailable = mm.totalAvailable;
      mkt.crossMatching = mm.crossMatching;
      mkt.runnersVoidable = false;
      mkt.version = 3717758588;
      mkt.numberOfWinners = mm.numberOfWinners;
      mkt.numberOfRunners = mm.numberOfRunners;
      mkt.numberOfActiveRunners = mm.numberOfActiveRunners;
      mkt.lastMatchTime = Date.now;
      mkt.updateTime = null;
      mkt.totalMatched = mm.totalMatched;

      var runnerlist = [];
      mm.runners.forEach((r) => {
        var runnr = new Object();
        runnr.selectionId = r.id;
        runnr.handicap = r.handicap;
        runnr.status = r.status;
        runnr.adjustmentFactor = r.adjustmentFactor;
        runnr.lastPriceTraded = 2.4;
        runnr.totalMatched = 0;
        runnr.removalDate = null;
        runnr.sp = null;
        var ex = new Object();
        ex.availableToBack = [
          { price: r.price1 == null ? 0 : r.price1, size: Math.round(r.size1) },
          { price: r.price2 == null ? 0 : r.price2, size: Math.round(r.size2) },
          { price: r.price3 == null ? 0 : r.price3, size: Math.round(r.size3) },
        ];
        ex.availableToLay = [
          { price: r.lay1 == null ? 0 : r.lay1, size: Math.round(r.ls1) },
          { price: r.lay2 == null ? 0 : r.lay2, size: Math.round(r.ls2) },
          { price: r.lay3 == null ? 0 : r.lay3, size: Math.round(r.ls3) },
        ];
        runnr.ex = ex;

        runnerlist.push(runnr);
      });
      mkt.runners = runnerlist;

      MainObj.push(mkt);
    });
  });

  return MainObj;
}
//http://localhost:3000/getMarketBookWithFancy/1.191464465
app.get("/getMarketBookWithFancy/:mkid", (req, res, next) => {
  var market = req.params.mkid;

  var config = {
    method: "get",
    url: "http://209.127.163.3:5000/getMarketBookWithFancy/" + market,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      var mydata = MarketBookWithFancyToBetfair(response.data);
      // res.json(response.data);
      res.json(mydata);
    })
    .catch(function (error) {
      console.log(error);
    });
});

function MarketBookWithFancyToBetfair(mydata) {
  var MainObj = [];
  //var mktbook = mydata.marketBooks;
  var mktbook = mydata;
  mktbook.forEach((mms) => {
    mms.marketBooks.forEach((mm) => {
      var mkt = new Object();
      mkt.marketId = mm.id;
      mkt.isMarketDataDelayed = mm.isMarketDataDelayed;
      mkt.status = mm.marketStatus;
      if (mm.marketStatus == "InPlay") mkt.status = "OPEN";
      mkt.betDelay = mm.betDelay;
      mkt.bspReconciled = false;
      mkt.complete = true;
      mkt.isInplay = false;
      //if (mm.marketStatus == "InPlay")
      //m.inplay = true;
      //else m.inplay = false;
      mkt.inplay = false;
      mkt.totalAvailable = mm.totalAvailable;
      mkt.crossMatching = mm.crossMatching;
      mkt.runnersVoidable = false;
      mkt.version = 3717758588;
      mkt.numberOfWinners = mm.numberOfWinners;
      mkt.numberOfRunners = mm.numberOfRunners;
      mkt.numberOfActiveRunners = mm.numberOfActiveRunners;
      mkt.lastMatchTime = Date.now;
      mkt.updateTime = null;
      mkt.totalMatched = mm.totalMatched;

      var runnerlist = [];
      mm.runners.forEach((r) => {
        var runnr = new Object();
        runnr.selectionId = r.id;
        runnr.handicap = r.handicap;
        runnr.status = r.status;
        runnr.adjustmentFactor = r.adjustmentFactor;
        runnr.lastPriceTraded = 2.4;
        runnr.totalMatched = 0;
        runnr.removalDate = null;
        runnr.sp = null;
        var ex = new Object();
        ex.availableToBack = [
          { price: r.price1 == null ? 0 : r.price1, size: Math.round(r.size1) },
          { price: r.price2 == null ? 0 : r.price2, size: Math.round(r.size2) },
          { price: r.price3 == null ? 0 : r.price3, size: Math.round(r.size3) },
        ];
        ex.availableToLay = [
          { price: r.lay1 == null ? 0 : r.lay1, size: Math.round(r.ls1) },
          { price: r.lay2 == null ? 0 : r.lay2, size: Math.round(r.ls2) },
          { price: r.lay3 == null ? 0 : r.lay3, size: Math.round(r.ls3) },
        ];
        runnr.ex = ex;

        runnerlist.push(runnr);
      });
      mkt.runners = runnerlist;

      MainObj.push(mkt);
    });
  });

  return MainObj;
}

function convertBetPro(mydata, mkid) {
  var MyObj = new Object();
  try {
    var mkt = mydata.marketBooks;
    var mlist = [];

    //var mm = mkt.find((x) => x.id == mkid);
    var mm = mkt.find((x) => x.bettingAllowed == true && x.runners.length > 1);

    if (mm.runners.length > 1) {
      var m = new Object();
      m.marketId = mm.id;
      if (mm.marketStatus == "InPlay") m.inplay = true;
      else m.inplay = false;
      m.priceStatus = mm.bettingAllowed;
      var mev = [];

      //  mm.runners.sort(function (a, b) {
      //    console.log(a.srno);
      //    return parseFloat(a.id) - parseFloat(b.id);
      //  });

      mm.runners.forEach((r) => {
        m.marketId = mm.id;
        m.inplay = mm.bettingAllowed;
        m.priceStatus = mm.marketStatus;
        var ev = new Object();
        ev.RunnerName = r.name;
        ev.SelectionId = r.id;

        if (r.lay1 != null) ev.LayPrice1 = r.lay1.toString();
        else ev.LayPrice1 = "0";
        if (r.ls1 != null) ev.LaySize1 = r.ls1.toFixed(2).toString();
        else ev.LaySize1 = "0";

        if (r.lay2 != null) ev.LayPrice2 = r.lay2.toString();
        else ev.LayPrice2 = "0";
        if (r.ls2 != null) ev.LaySize2 = r.ls2.toFixed(2).toString();
        else ev.LaySize2 = "0";

        if (r.lay3 != null) ev.LayPrice3 = r.lay3.toString();
        else ev.LayPrice3 = "0";
        if (r.ls3 != null) ev.LaySize3 = r.ls3.toFixed(2).toString();
        else ev.LaySize3 = "0";

        if (r.price1 != null) ev.BackPrice1 = r.price1.toString();
        else ev.BackPrice1 = "0";

        if (r.size1 != null) ev.BackSize1 = r.size1.toFixed(2).toString();
        else ev.BackSize1 = "0";

        if (r.price2 != null) ev.BackPrice2 = r.price2.toString();
        else ev.BackPrice2 = "0";

        if (r.size2 != null) ev.BackSize2 = r.size2.toFixed(2).toString();
        else ev.BackSize2 = "0";

        if (r.price3 != null) ev.BackPrice3 = r.price3.toString();
        else ev.BackPrice3 = "0";
        if (r.size3 != null) ev.BackSize3 = r.size3.toFixed(2).toString();
        else ev.BackSize3 = "0";
        mev.push(ev);
      });
      m.events = mev;
      mlist.push(m);
    }
    //});

    MyObj.market = mlist;

    var sslist = [];
    var dada = mkt.filter((x) => x.winners == 0 && x.runners.length == 1);

    if (dada != null) {
      dada.forEach((item) => {
        item.runners.forEach((r) => {
          if (r.name != null) {
            var ss = new Object();
            ss.SelectionId = r.id;
            ss.RunnerName = r.name;
            ss.GameStatus = r.status;

            ss.LayPrice1 = parseInt(r.lay1, 10).toString();
            ss.LaySize1 = parseInt(r.ls1, 10).toString();
            ss.BackPrice1 = parseInt(r.price1, 10).toString();
            ss.BackSize1 = parseInt(r.size1, 10).toString();
            // if (item.min == "0")
            //  ss.GameStatus = "SUSPANDED";
            sslist.push(ss);
          }
        });
      });
      MyObj.session = sslist;
    }
  } catch (exp) {
    console.log(exp);
    return MyObj;
  }

  return MyObj;
}

function BetProToBetfair(mydata) {
  var MainObj = [];
  //var mktbook = mydata.marketBooks;
  var mktbook = mydata;
  mktbook.forEach((mm) => {
    var mkt = new Object();
    mkt.marketId = mm.id;
    mkt.isMarketDataDelayed = mm.isMarketDataDelayed;
    mkt.status = mm.status;
    if (mm.marketStatus == "InPlay") mkt.status = "OPEN";
    mkt.betDelay = mm.betDelay;
    mkt.bspReconciled = false;
    mkt.complete = true;
    mkt.isInplay = false;
    if (mm.marketStatus == "InPlay") m.inplay = true;
    else m.inplay = false;
    mkt.inplay = false;
    mkt.totalAvailable = mm.totalAvailable;
    mkt.crossMatching = mm.crossMatching;
    mkt.runnersVoidable = false;
    mkt.version = 3717758588;
    mkt.numberOfWinners = mm.numberOfWinners;
    mkt.numberOfRunners = mm.numberOfRunners;
    mkt.numberOfActiveRunners = mm.numberOfActiveRunners;
    mkt.lastMatchTime = Date.now;
    mkt.updateTime = null;
    mkt.totalMatched = mm.totalMatched;

    var runnerlist = [];
    mm.runners.forEach((r) => {
      var runnr = new Object();
      runnr.selectionId = r.id;
      runnr.handicap = r.handicap;
      runnr.status = r.status;
      runnr.adjustmentFactor = r.adjustmentFactor;
      runnr.lastPriceTraded = 2.4;
      runnr.totalMatched = 0;
      runnr.removalDate = null;
      runnr.sp = null;
      var ex = new Object();
      ex.availableToBack = [
        { price: r.price1 == null ? 0 : r.price1, size: Math.round(r.size1) },
        { price: r.price2 == null ? 0 : r.price2, size: Math.round(r.size2) },
        { price: r.price3 == null ? 0 : r.price3, size: Math.round(r.size3) },
      ];
      ex.availableToLay = [
        { price: r.lay1 == null ? 0 : r.lay1, size: Math.round(r.ls1) },
        { price: r.lay2 == null ? 0 : r.lay2, size: Math.round(r.ls2) },
        { price: r.lay3 == null ? 0 : r.lay3, size: Math.round(r.ls3) },
      ];
      runnr.ex = ex;

      runnerlist.push(runnr);
    });
    mkt.runners = runnerlist;

    MainObj.push(mkt);
  });

  return MainObj;
}
function BetProToBetfair_old(mydata) {
  var MainObj = [];
  //var mktbook = mydata.marketBooks;
  var mktbook = mydata;
  mktbook.forEach((mm) => {
    var mkt = new Object();
    mkt.marketId = mm.id;
    mkt.isMarketDataDelayed = mm.isMarketDataDelayed;
    mkt.status = mm.marketStatus;
    if (mm.marketStatus == "InPlay") mkt.status = "OPEN";
    mkt.betDelay = mm.betDelay;
    mkt.bspReconciled = false;
    mkt.complete = true;
    mkt.isInplay = false;
    if (mm.marketStatus == "InPlay") m.inplay = true;
    else m.inplay = false;
    mkt.inplay = false;
    mkt.totalAvailable = 293194.02;
    mkt.crossMatching = true;
    mkt.runnersVoidable = false;
    mkt.version = 3717758588;
    mkt.numberOfWinners = mm.runners.length;
    mkt.numberOfRunners = mm.runners.length;
    mkt.numberOfActiveRunners = 3;
    mkt.lastMatchTime = Date.now;
    mkt.updateTime = null;
    mkt.totalMatched = mm.totalMatched;

    var runnerlist = [];
    mm.runners.forEach((r) => {
      var runnr = new Object();
      runnr.selectionId = r.id;
      runnr.handicap = r.handicap;
      runnr.status = r.status;
      runnr.adjustmentFactor = r.adjustmentFactor;
      runnr.lastPriceTraded = 2.4;
      runnr.totalMatched = 0;
      runnr.removalDate = null;
      runnr.sp = null;
      var ex = new Object();
      ex.availableToBack = [
        { price: r.price1 == null ? 0 : r.price1, size: Math.round(r.size1) },
        { price: r.price2 == null ? 0 : r.price2, size: Math.round(r.size2) },
        { price: r.price3 == null ? 0 : r.price3, size: Math.round(r.size3) },
      ];
      ex.availableToLay = [
        { price: r.lay1 == null ? 0 : r.lay1, size: Math.round(r.ls1) },
        { price: r.lay2 == null ? 0 : r.lay2, size: Math.round(r.ls2) },
        { price: r.lay3 == null ? 0 : r.lay3, size: Math.round(r.ls3) },
      ];
      runnr.ex = ex;

      runnerlist.push(runnr);
    });
    mkt.runners = runnerlist;

    MainObj.push(mkt);
  });

  return MainObj;
}
//http://localhost:3000/market/1.168743348
app.get("/market/:evntid", (req, res, next) => {
  var eventid = req.params.evntid;

  //'{"gameId":"30460427","fn":0,"ism":0,"dataid":"0"}'
  var jstr = '{"gameId":"' + eventid + '","fn":0,"ism":0,"dataid":"0"}';
  var data = incrypt(jstr);
  // data = "g+hW+/ZKpREjijHUk8VQQ2K5sbajaks3E2D2qj5Hvi0RWiYEyWvxndWERRzZUJO0O4rCA/4XOzk50YKat51rfw==##@##70ccd95af2d8576e7b54a4c030fc4213##@##19e7f27e83a30325";

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const requestBody = {
    // gameId: req.query.event
    data: data,
  };
  var surl = siteurl + "api/game/getdata";
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      Cookie: cookies,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Connection: "keep-alive",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": token,
    },
  };

  axios
    .post(surl, qs.stringify(requestBody), config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }
        var str = JSON.parse(
          CryptoJS.AES.decrypt(result.data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
            format: CryptoJSAesJson,
          }).toString(CryptoJS.enc.Utf8)
        );
        //res.json(str);
        var mdata = DiamondToBetfair(str.original);
        //var mdata = convert(result.data)

        res.json(mdata);
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      res.status(200).json({}).end();
      // Do somthing
    });
});
function DiamondToBetfair(mydata) {
  var MainObj = [];
  //var mktbook = mydata.marketBooks;
  var mktbook = mydata.data.t1;
  mktbook.forEach((mm) => {
    var mkt = new Object();
    var runnerlist = [];
    mm.forEach((r) => {
      var runnr = new Object();
      runnr.selectionId = r.sid;
      // runnr.handicap = r.handicap;
      runnr.status = r.status;
      // runnr.adjustmentFactor = r.adjustmentFactor;
      runnr.lastPriceTraded = 2.4;
      runnr.totalMatched = 0;
      runnr.removalDate = null;
      runnr.sp = null;
      var ex = new Object();
      ex.availableToBack = [
        { price: r.b1 == null ? 0 : r.b1, size: Math.round(r.bs1) },
        { price: r.b2 == null ? 0 : r.b2, size: Math.round(r.bs2) },
        { price: r.b3 == null ? 0 : r.b3, size: Math.round(r.bs3) },
      ];
      ex.availableToLay = [
        { price: r.l1 == null ? 0 : r.l1, size: Math.round(r.ls1) },
        { price: r.l2 == null ? 0 : r.l2, size: Math.round(r.ls2) },
        { price: r.l3 == null ? 0 : r.l3, size: Math.round(r.ls3) },
      ];
      runnr.ex = ex;
      mkt.marketId = r.mid;
      mkt.status = r.mstatus;
      mkt.Market_type = r.mname;
      mkt.inplay = r.inplay;
      runnerlist.push(runnr);
    });
    mkt.runners = runnerlist;

    mkt.isMarketDataDelayed = mm.isMarketDataDelayed;

    //if (mm.marketStatus == "InPlay") mkt.status = "OPEN";
    //mkt.betDelay = mm.betDelay;
    mkt.bspReconciled = false;
    mkt.complete = true;
    mkt.isInplay = false;

    mkt.totalAvailable = 293194.02;
    mkt.crossMatching = true;
    mkt.runnersVoidable = false;
    mkt.version = 3717758588;
    mkt.numberOfWinners = mm.length;
    mkt.numberOfRunners = mm.length;
    mkt.numberOfActiveRunners = 3;
    mkt.lastMatchTime = Date.now;
    mkt.updateTime = null;
    //mkt.totalMatched = mm.totalMatched;

    MainObj.push(mkt);
  });

  return MainObj;
}

/********************************************************************* */
/********************************************************************* */
/***************************whitehorse******************************* */
/********************************************************************* */
/********************************************************************* */
//http://betsoho:3000/market/:evntid/:market_ids
//app.get("/betsoho/:evntid/:market_ids", (req, res, next) => {
//var eventid = req.params.evntid;
//http://localhost:3000/betsoho/1.182882287,1.182943545
app.get("/betsoho/:market_ids", (req, res, next) => {
  var market_ids = req.params.market_ids;
  var config = {
    method: "get",
    url:
      "https://api.betsoho.com/api/selections?account_id=whKgjknjk6kgYjkf02032022&market_ids=" +
      market_ids +
      // "&event_id=" +
      //  eventid +
      "&virtualise=true",
    headers: {
      authorization: "655q4t2eq64t437eq957e59e229652tw:whitehorse",
    },
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch(function (error) {
      res.status(200).json({}).end();
    });
});

//http://localhost:3000/getList/4
app.get("/getList/:spid", (req, res, next) => {
  var spid = req.params.spid;

  //'{"eventtypeid":4,"statement":"GameHighlightToday"}'
  var jstr = '{"eventtypeid":' + spid + ',"statement":"GameHighlightToday"}';
  var data = incrypt(jstr);
  if (spid === "4")
    data =
      "aIKmxscDgbpbv14CadQ0DD3Lsl3o8UikF1LXvLJWSIEayLtGJ55RGKTdD1MOe05ivfaMjX2lE32Hwm9WA3aC1w==##@##53e13a08c2327b7c4217a4ce008524e6##@##a09bc7a78d10f7ef";
  // data = "g+hW+/ZKpREjijHUk8VQQ2K5sbajaks3E2D2qj5Hvi0RWiYEyWvxndWERRzZUJO0O4rCA/4XOzk50YKat51rfw==##@##70ccd95af2d8576e7b54a4c030fc4213##@##19e7f27e83a30325";

  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const requestBody = {
    // gameId: req.query.event
    data: data,
  };
  var surl = siteurl + "api/user/gamehighlight";
  const config = {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36",
      Cookie: cookies,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Connection: "keep-alive",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": token,
    },
  };

  axios
    .post(surl, qs.stringify(requestBody), config)
    .then((result) => {
      try {
        if (result.data.error == "Unauthenticated.") {
          ReadSession();
          res.status(200).json({}).end();
        }
        var str = JSON.parse(
          CryptoJS.AES.decrypt(result.data, "qtu18TIJtuiPYzc4ae5c6WsRTY", {
            format: CryptoJSAesJson,
          }).toString(CryptoJS.enc.Utf8)
        );
        //res.json(str);
        var mdata = convetDiamondList(str.original);
        //var mdata = convert(result.data)
        if (mdata.isLoggedOut) ReadSession();
        res.json(mdata);
      } catch (ex) {
        console.log(exp);
        res.status(200).json({}).end();
      }
    })
    .catch((err) => {
      res.status(200).json({}).end();
      // Do somthing
    });
});

function convetDiamondList(mydata) {
  return mydata;
}

//http://localhost:3000/GetmarketsBookV4/1.182882287,1.182943545
app.get("/GetmarketsBookV4/:market_ids", (req, res, next) => {
  var market_ids = req.params.market_ids;
  var config = {
    method: "get",
    url:
      "http://209.127.163.4:2323/Exchange/GetmarketsBookV4BPBook?marketid=" +
      market_ids,
  };
  var markets = market_ids.split(",");
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      var mydata = V4BPToBetfair(response.data);
      mydata = mydata.filter((x) => markets.includes(x.marketId));

      const result = [];
      const map = new Map();
      for (const item of mydata) {
        if (!map.has(item.marketId)) {
          map.set(item.marketId, true); // set any value to Map
          result.push(item);
        }
      }

      res.json(result);
    })
    .catch(function (error) {
      // if (error.response.status == 401) LoginBetsoho();
      res.status(200).json({}).end();
    });
});

function V4BPToBetfair(mydata) {
  var MainObj = [];
  //
  // var mktbook = mydata;
  mydata.forEach((markets) => {
    var mktbook = markets.marketBooks;
    mktbook.forEach((mm) => {
      var mkt = new Object();
      mkt.marketId = mm.id;
      var catlg = markets.BookMakerCatalog.find((x) => x.marketId === mm.id);
      mkt.marketType = catlg.marketType;
      mkt.isMarketDataDelayed = mm.isMarketDataDelayed;
      mkt.status = mm.marketStatus;
      if (mm.marketStatus == "InPlay") mkt.status = "OPEN";
      mkt.betDelay = mm.betDelay;
      mkt.bspReconciled = false;
      mkt.complete = true;
      mkt.isInplay = false;
      mkt.inplay = false;
      if (mm.marketStatus == "InPlay") {
        mkt.isInplay = true;
        mkt.inplay = true;
      }
      mkt.totalAvailable = 293194.02;
      mkt.crossMatching = true;
      mkt.runnersVoidable = false;
      mkt.version = 3717758588;
      mkt.numberOfWinners = 1;
      mkt.numberOfRunners = mm.runners.length;
      mkt.numberOfActiveRunners = mm.runners.length;
      mkt.lastMatchTime = Date.now;
      mkt.updateTime = null;
      mkt.totalMatched = mm.totalMatched;

      var runnerlist = [];
      mm.runners.forEach((r) => {
        var runnr = new Object();
        runnr.selectionId = r.id;
        runnr.handicap = r.handicap;
        runnr.status = r.status;
        runnr.adjustmentFactor = r.adjustmentFactor;
        runnr.lastPriceTraded = 2.4;
        runnr.totalMatched = 0;
        runnr.removalDate = null;
        runnr.sp = null;
        var ex = new Object();
        ex.availableToBack = [
          { price: r.price1 == null ? 0 : r.price1, size: Math.round(r.size1) },
          { price: r.price2 == null ? 0 : r.price2, size: Math.round(r.size2) },
          { price: r.price3 == null ? 0 : r.price3, size: Math.round(r.size3) },
        ];
        ex.availableToLay = [
          { price: r.lay1 == null ? 0 : r.lay1, size: Math.round(r.ls1) },
          { price: r.lay2 == null ? 0 : r.lay2, size: Math.round(r.ls2) },
          { price: r.lay3 == null ? 0 : r.lay3, size: Math.round(r.ls3) },
        ];
        runnr.ex = ex;

        runnerlist.push(runnr);
      });
      mkt.runners = runnerlist;

      MainObj.push(mkt);
    });
  });

  return MainObj;
}
/********************************************************************************************** */
/*********************************diamond909.xyz*************************************** */
/********************************************************************************************** */
/********************************************************************************************** */

var Diamond909zyz_tokken = "";
var Diamond909zyz_userid = "";
function loginDiamond909zyz() {
  var data = JSON.stringify({
    user_name: "radhaji",
    password: "radhaji@123",
    type: "C",
  });

  var config = {
    method: "post",
    url: "https://diamond909.xyz/api/user/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      Diamond909zyz_userid = response.data.data.user_id;
      Diamond909zyz_tokken = response.data.data.token;
      //  console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
//localhost:3000/diamond909_odds/30965528
http: app.get("/diamond909_odds/:evntid", (req, res, next) => {
  var eventid = req.params.evntid;

  var data = JSON.stringify({
    match_id: eventid,
    is_show_100_percent: 0,
    user_id: +Diamond909zyz_userid,
    user_type_id: 7,
    market_id: "",
  });

  var config = {
    method: "post",
    url: "https://diamond909.xyz/api/match/getMatchDetail",
    headers: {
      Authorization: "Bearer " + Diamond909zyz_tokken,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      var mydata = ConvertDiamond909zyz_odds(response.data);
      res.json(mydata);
    })
    .catch(function (error) {
      res.json(error);
    });
});

function ConvertDiamond909zyz_odds(mydata) {
  var MyObj = new Object();
  try {
    if (mydata.status) {
      var mlist = [];
      var m = new Object();
      var mev = [];

      var mktodd = mydata.data;

      mktodd.markets.forEach((mm) => {
        if (mm.name == "Match Odds") {
          m.marketId = mm.market_id;
          // m.inplay = r.iplay;
          m.priceStatus = mm.status;
          //console.log(r.mstatus);

          mm.runner_json.forEach((r) => {
            var ev = new Object();
            ev.RunnerName = r.name;
            ev.SelectionId = r.selection_id;
            r.lay.forEach((l, i) => {
              if (i == 0) {
                ev.LayPrice1 = l.price.toString();
                ev.LaySize1 = l.size.toString();
              } else if (i == 1) {
                ev.LayPrice2 = l.price.toString();
                ev.LaySize2 = l.size.toString();
              } else if (i == 2) {
                ev.LayPrice3 = l.price.toString();
                ev.LaySize3 = l.size.toString();
              }
            });
            r.back.forEach((b, i) => {
              if (i == 0) {
                ev.BackPrice1 = b.price.toString();
                ev.BackSize1 = b.size.toString();
              } else if (i == 1) {
                ev.BackPrice2 = b.price.toString();
                ev.BackSize2 = b.size.toString();
              } else if (i == 2) {
                ev.BackPrice3 = b.price.toString();
                ev.BackSize3 = b.size.toString();
              }
            });

            mev.push(ev);
          });
        }
      });

      m.events = mev;
      mlist.push(m);
      MyObj.market = mlist;

      var sslist = [];

      mktodd.fancies.forEach((item) => {
        // if (item.ballsess == "1") {
        var ss = new Object();
        ss.SelectionId = item.fancy_id;

        ss.RunnerName = item.name;

        ss.GameStatus = item.display_message;

        ss.LayPrice1 = item.session_value_no;
        ss.LaySize1 = item.session_size_no;
        ss.BackPrice1 = item.session_value_yes;
        ss.BackSize1 = item.session_size_yes;
        if (item.active != "1") ss.GameStatus = "SUSPANDED";
        sslist.push(ss);
        //  }
      });
      MyObj.session = sslist;
    }
  } catch (exp) {
    console.log(exp);
    return MyObj;
  }

  return MyObj;
}
