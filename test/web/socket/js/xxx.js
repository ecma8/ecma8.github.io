define("m-douyu/js/lookat", ["jquery", "m-douyu/js/com/device", "m-douyu/js/com/list-more"], function(o, t, n) {
	function i() {
		var n = this;
		n.init = function() {
			w.init(), v.init(), n.bindEvent(), n.getData(), 90 != window.orientation && -90 != window.orientation || (o(".modal").hide(), l(), o("#landscape-modal").show())
		}, n.bindEvent = function() {
			o(".live-share").on("click", f.toggle), o(".share-bar .close").on("click", f.hide), o("#dy-video-player").on("click", function() {
				this.play()
			}), o(".poster").on("click", function() {
				O.status ? O.play() : (l(), o(".play-btn").hide(), o(".room-stop-focus").show())
			}), o(".APP-btn, .APP-bar").on("click", function(t) {
				(s() || c() || d()) && (t.preventDefault(), l(), o("#weixin-modal").show())
			}), o("#weixin-modal").on("click", function() {
				u(), o(this).hide()
			}), o(".no-play").length && (o(".no-play .close").click(function() {
				o(".no-play").hide()
			}), setTimeout(function() {
				o(".no-play").hide()
			}, 1e4)), o(window).on("orientationchange", function(t) {
				180 != window.orientation && 0 != window.orientation || (u(), o(".modal").hide(), O.status || (l(), o("#download-modal").show(), o("#js-fix-download").hide())), 90 != window.orientation && -90 != window.orientation || (o(".modal").hide(), l(), o("#landscape-modal").show())
			}), window.DYS && (o(".goapp").click(function() {
				DYS.submit({
					point_id: DYS.point.page(2, 0, 0)
				})
			}), o(".godown").click(function() {
				DYS.submit({
					point_id: DYS.point.page(3, 0, 0)
				})
			}), m(!0))
		}, n.getData = function() {
			isRecommend || o(".no-play").hide(), 1 == $ROOM.show_status ? o.ajax({
				type: "get",
				url: "/html5/live",
				data: {
					roomId: $ROOM.room_id
				},
				dataType: "json",
				success: function(o) {
					o.error || ($ROOM.hls_url = o.data.hls_url, $ROOM.room_pic = o.data.room_src, O.startTimer(), n.render())
				},
				error: function(o) {
					alert("网络异常,请尝试刷新页面")
				}
			}) : (O.status = !1, o(".play-btn").hide(), o(".room-stop-focus").show(), n.render())
		}, n.render = function(n) {
			o(".url-content .description").html(o("#page-description").text()), o(".url-content .url").html($ROOM.room_url), o(".goapp").attr("href", $SYS.main_url + $ROOM.room_id + "#mobile&" + isVertical + "&" + $ROOM.room_pic), _ = t.setRoomInfo($ROOM.room_id, isVertical, $ROOM.room_pic), O.init($ROOM.hls_url)
		}
	}

	function e() {
		function t() {
			var r = new Date;
			r.getTime() - i > e && (n.status = !1, a[0].pause(), o(".modal").hide(), o("#js-fix-download").hide(), o("#download-modal").show(), g.onModalOut(), l()), n.status && setTimeout(t, 1e3)
		}
		var n = this;
		n.status = !0;
		var i = 0,
			e = 3e5,
			a = o("#dy-video-player");
		n.init = function(o) {
			a.attr("src", o)
		}, n.play = function() {
			return "" == a.attr("src") ? !1 : void(n.status && (a[0].play(), o(".poster").hide(), o(".no-play").hide()))
		}, n.startTimer = function() {
			var o = new Date;
			i = o.getTime(), t()
		}
	}

	function a() {
		var t = this,
			n = o(".share-bar"),
			i = o(".live-share");
		t.status = !1, t.show = function() {
			t.status = !0, n.slideDown(), i.addClass("active")
		}, t.hide = function() {
			t.status = !1, n.slideUp(), i.removeClass("active")
		}, t.toggle = function() {
			window.DYS && DYS.submit({
				point_id: DYS.point.page(1, 0, 0)
			}), t.status ? t.hide() : t.show()
		}
	}

	function r() {
		function t(o, t) {
			if(!o) return !1;
			var n = "";
			"tsina" == o && (n = "&appkey=979098171&ralateuid=3982726153");
			var i = $ROOM.room_url,
				e = "http://www.jiathis.com/send/?webid=" + o + "&url=" + encodeURIComponent(i) + "&title=&summary=" + encodeURIComponent("#斗鱼# 我正在斗鱼观看直播 “" + $ROOM.room_name + " ”，你也快来加入吧~") + "&uid=1896137&data_track_clickback=true&pic=" + encodeURIComponent($ROOM.room_pic) + n;
			t.attr("href", e)
		}
		var n = this;
		n.getDoms = function() {
			var t = o(".share-list");
			n.doms = {
				shareBtn: t,
				shareMoreBtn: t.find("[data-to]"),
				weixinShare: o("#weixin"),
				urlModal: o("#url-modal")
			}
		}, n.init = function() {
			n.getDoms(), n.addEvent()
		}, n.addEvent = function() {
			n.doms.shareMoreBtn.on("click", function(n) {
				var i = o(this),
					e = i.attr("data-to");
				t(e, i)
			}), n.doms.weixinShare.on("click", function(o) {
				n.doms.urlModal.show(), l()
			}), n.doms.urlModal.on("click", ".close", function(o) {
				n.doms.urlModal.hide(), u()
			})
		}
	}

	function s() {
		var o = navigator.userAgent.toLowerCase();
		return "micromessenger" == o.match(/MicroMessenger/i)
	}

	function c() {
		var o = navigator.userAgent.toLowerCase();
		return "weibo" == o.match(/weibo/i)
	}

	function d() {
		var o = navigator.userAgent.toLowerCase();
		return "qq" == o.match(/qq/i)
	}

	function u() {
		o("#dy-video-player").css("margin-top", "0")
	}

	function l() {
		o("#dy-video-player").css("margin-top", "-10000px")
	}

	function m(t) {
		window.DYS && o(".live").each(function() {
			var t = this;
			1 != o(t).attr("data-fish") && o(t).attr("data-fish", 1).click(function(n) {
				var i = $ROOM.room_id,
					e = o(t).attr("href").replace("/", "");
				DYS.submit({
					point_id: DYS.point.page(4, 0, 0),
					rid: i,
					ext: {
						t: e
					}
				})
			})
		}), t || g.onGetMore()
	}

	function p() {
		var t = this,
			n = {
				$sendBar: o("#sendBar"),
				$focusRoom: o(".hd-focus"),
				$shareRoom: o("#shareRoom")
			};
		this.init = function() {
			t.bindEvent()
		}, this.bindEvent = function() {
			n.$sendBar.click(function() {
				_.openApp(1), g.onSendBar()
			}), n.$focusRoom.click(function() {
				return _.openApp(1), o(this).hasClass("stop-more") ? void g.onFocusInPlay() : void g.onFocus()
			}), n.$shareRoom.click(function() {
				f.toggle()
			})
		}
	}
	var h = new i,
		f = new a,
		w = new r,
		O = new e,
		v = new p,
		g = {
			submitPoint: function(o) {
				window.DYS && DYS.submit(o)
			},
			onFocusInPlay: function() {
				this.submitPoint({
					point_id: DYS.point.page(5, 0, 0)
				})
			},
			onSendBar: function() {
				this.submitPoint({
					point_id: DYS.point.page(6, 0, 0)
				})
			},
			onFocus: function() {
				this.submitPoint({
					point_id: DYS.point.page(7, 0, 0)
				})
			},
			onGetMore: function() {
				this.submitPoint({
					point_id: DYS.point.page(8, 0, 0)
				})
			},
			onModalOut: function() {
				this.submitPoint({
					point_id: DYS.point.page(9, 0, 0)
				})
			}
		};
	n.init({
		target: "#js-list-area",
		url: o("#js-list-area").data("url"),
		type: o("#js-list-area").data("type"),
		pageCount: o("#js-list-area").data("pagecount"),
		renderCallBack: m
	});
	$ROOM.room_url = $SYS.base_url + $ROOM.room_id, $ROOM.owner_name = o("#nickname").text(), $ROOM.room_name = o("#page-title").text(), $ROOM.room_pic = "", $ROOM.hls_url = "", h.init();
	var _ = t.setRoomInfo($ROOM.room_id, isVertical, $ROOM.room_pic);
	o(".goapp").click(function(o) {
		_.openApp(1), o.preventDefault()
	})
})