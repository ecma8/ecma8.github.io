// module.exports = function (grunt) {
//   // 项目配置
//   grunt.initConfig({
//     pkg: grunt.file.readJSON('package.json'),
// //  concat: {
// //    options: {
// //      separator: ';'
// //    },
// //    dist: {
// //      src: ['src/1.js', 'src/2.js', 'src/3.js'],
// //      dest: 'dest/libs.js'
// //    }
// //  },
// //  uglify: {
// //    build: {
// //      src: 'dest/libs.js',
// //      dest: 'dest/libs.min.js'
// //    }
// //  },
// 	jshint:{
// 		bulid:['Gruntfile.js','src/*.js'],
// 		option:{
// 			jshintrc:'.jshintrc'
// 		}
// 	},
// 	watch:{
// 		bulid:{
// 			files:['*.html','src/*.js','src/*.css'],
// 			tasks:['jshint'],
// 			option:{
// 				spawn:false,
// 				livereload: true
// 			}
// 		}
// 	}
//   });
// //grunt.loadNpmTasks('grunt-contrib-uglify');
// //grunt.loadNpmTasks('grunt-contrib-concat');
//   grunt.loadNpmTasks('grunt-contrib-jshint');
//   grunt.loadNpmTasks('grunt-contrib-watch');
//   // 默认任务
//   grunt.registerTask('live', ['jshint','watch']);
// };
//module.exports = function(grunt) {
//// 项目配置(任务配置)
//grunt.initConfig({
//  pkg: grunt.file.readJSON('package.json'),
//  watch: {
//    client: {
//      files: ['*.html', 'src/*.js', 'src/*.css', 'images/**/*'],
//      options: {
//        livereload: true
//      }
//    }
//  }
//});
// 
//// 加载插件
//grunt.loadNpmTasks('grunt-contrib-watch');
// 
//// 自定义任务
//grunt.registerTask('live', ['watch']);
// 
//};

//module.exports = function(grunt) {
// 
//// LiveReload的默认端口号，你也可以改成你想要的端口号
//var lrPort = 35729;
//// 使用connect-livereload模块，生成一个与LiveReload脚本
//// <script src="http://127.0.0.1:35729/livereload.js?snipver=1" type="text/javascript"></script>
// 	var serveStatic = require('serve-static');
//	var serveIndex = require('serve-index');
//	var lrMiddleware = function(connect, options, middlwares) {
//	  return [
//	    lrSnippet,
//	    // 静态文件服务器的路径 原先写法：connect.static(options.base[0])
//	    serveStatic(options.base[0]),
//	    // 启用目录浏览(相当于IIS中的目录浏览) 原先写法：connect.directory(options.base[0])
//	    serveIndex(options.base[0])
//	  ];
//	};
//// 项目配置(任务配置)
//grunt.initConfig({
//  // 读取我们的项目配置并存储到pkg属性中
//  pkg: grunt.file.readJSON('package.json'),
//  // 通过connect任务，创建一个静态服务器
//  connect: {
//    options: {
//      // 服务器端口号
//      port: 8000,
//      // 服务器地址(可以使用主机名localhost，也能使用IP)
//      hostname: 'localhost',
//      // 物理路径(默认为. 即根目录) 注：使用'.'或'..'为路径的时，可能会返回403 Forbidden. 此时将该值改为相对路径 如：/grunt/reloard。
//      base: '.'
//    }
//  },
//  // 通过watch任务，来监听文件是否有更改
//  watch: {
//    client: {
//      // 我们不需要配置额外的任务，watch任务已经内建LiveReload浏览器刷新的代码片段。
//      options: {
//        livereload: lrPort
//      },
//      // '**' 表示包含所有的子目录
//      // '*' 表示包含所有的文件
//      files: ['*.html', 'css/*', 'js/*', 'images/**/*']
//    }
//  }
//}); // grunt.initConfig配置完毕
// 
//// 加载插件
//grunt.loadNpmTasks('grunt-contrib-connect');
//grunt.loadNpmTasks('grunt-contrib-watch');
// 
//// 自定义任务
//grunt.registerTask('live', ['connect', 'watch']);
//};

// module.exports = function(grunt) {
// 	// LiveReload的默认端口号，你也可以改成你想要的端口号
// 	var lrPort = 35729;
// 	// 使用connect-livereload模块，生成一个与LiveReload脚本
// 	// <script src="http://127.0.0.1:35729/livereload.js?snipver=1" type="text/javascript"></script>
// 	var lrSnippet = require('connect-livereload')({
// 		port: lrPort
// 	});
// 	// 使用 middleware(中间件)，就必须关闭 LiveReload 的浏览器插件
// 	var serveStatic = require('serve-static');
// 	var serveIndex = require('serve-index');
// 	var lrMiddleware = function(connect, options, middlwares) {
// 		return [
// 			lrSnippet,
// 			// 静态文件服务器的路径
// 			serveStatic(options.base[0]),
// 			// 启用目录浏览(相当于IIS中的目录浏览)
// 			serveIndex(options.base[0])
// 		];
// 	};

// 	// 项目配置(任务配置)
// 	grunt.initConfig({
// 		// 读取我们的项目配置并存储到pkg属性中
// 		pkg: grunt.file.readJSON('package.json'),
// 		// 通过connect任务，创建一个静态服务器
// 		connect: {
// 			options: {
// 				// 服务器端口号
// 				port: 8888,
// 				// 服务器地址(可以使用主机名localhost，也能使用IP)
// 				hostname: 'localhost',
// 				// 物理路径(默认为. 即根目录) 注：使用'.'或'..'为路径的时，可能会返回403 Forbidden. 此时将该值改为相对路径 如：/grunt/reloard。
// 				base: '.'
// 			},
// 			livereload: {
// 				options: {
// 					// 通过LiveReload脚本，让页面重新加载。
// 					middleware: lrMiddleware
// 				}
// 			}
// 		},
// 		// 通过watch任务，来监听文件是否有更改
// 		watch: {
// 			client: {
// 				// 我们不需要配置额外的任务，watch任务已经内建LiveReload浏览器刷新的代码片段。
// 				options: {
// 					livereload: lrPort
// 				},
// 				// '**' 表示包含所有的子目录
// 				// '*' 表示包含所有的文件
// 				files: ['*.html', 'src/*.css', 'src/.js*', 'build/images/**/*']
// 			}
// 		}
// 	}); // grunt.initConfig配置完毕

// 	// 加载插件
// 	grunt.loadNpmTasks('grunt-contrib-connect');
// 	grunt.loadNpmTasks('grunt-contrib-watch');

// 	// 自定义任务
// 	grunt.registerTask('live', ['connect', 'watch']);
// };

module.exports = function(grunt){
    //初始化grunt 配置
    grunt.initConfig({
 
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        //concat插件的配置信息
        concat: {
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
            },
            cssConcat:{
                src:['src/css/css1.css','src/css/css2.css'],
                dest:'src/css/concat/<%= pkg.name %> - <%= pkg.version %>.css' //dest 是目的地输出
            },
            jsConcat:{
                src:'src/js/*.js',
                dest:'src/js/concat/<%=pkg.name %> - <%= pkg.version %>.js'
            }
        },
        //压缩css
        cssmin:{
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'src/css/concat/<%=pkg.name %> - <%=pkg.version %>.css',//压缩是要压缩合并了的
                dest:'dist/css/<%= pkg.name %> - <%= pkg.version %>.min.css' //dest 是目的地输出
            }
        },
        //压缩js
        uglify:{
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'src/js/concat/<%=pkg.name %> - <%=pkg.version %>.js',//压缩是要压缩合并了的
                dest:'dist/js/<%= pkg.name %> - <%= pkg.version %>.min.js' //dest 是目的地输出
            }
        },
 
        jshint:{
            options:{
                jshintrc:'.jshint'
            },
            build:['Gruntfile.js','src/js/*js']
        },
 
        csslint:{
            options:{
                csslintrc:'.csslint'
            },
            build:['src/css/*.css']
 
        },
        //watch自动化
        watch:{
            build:{
                files:['src/js/*.js','src/css/*.css'],
                tasks:['jshint','csslint','concat','cssmin','uglify'],
                options:{spawn:false}
            }
        }
 
    });
    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //告诉grunt当我们在终端输入grunt时需要做些什么
    grunt.registerInitTask('default',['jshint','csslint','concat','cssmin','uglify','watch']);//先进行语法检查，如果没有问题，再合并，再压缩
};