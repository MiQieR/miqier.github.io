var posts=["ASUS-Router-Light-NAS/","Anzhiyu-games-page/","Automatically-generate-video/","Chainedbox-OpenWrt/","Chainedbox-OMV/","DIY-x86-NAS/","Dell-XPS9360-Hackintosh/","External-Hard-Drive-Case/","Free-CDN-for-Blog/","GitHub-Pages-Blog/","Hexo-Blog/","Markdown-Advance-Format/","NAS-Aria2-Downloader/","Pocket-WiFi-with-Snapdragon-410/","Solid-state-Drive(SSD)/","iOS-Sideloading-AltStore/","iOS-TrollStore/","iperf3-Speed-Test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };