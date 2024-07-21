function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_000.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_001.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_002.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_003.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_004.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_005.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_006.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_007.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_008.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_009.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_010.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_011.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_012.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_013.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_014.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_015.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_016.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_017.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_018.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_019.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_020.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_021.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_022.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_023.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_024.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_025.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_026.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_027.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_028.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_029.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_030.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_031.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_032.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_033.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_034.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_035.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_036.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_037.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_038.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_039.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_040.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_041.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_042.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_043.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_044.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_045.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_046.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_047.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_048.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_049.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_050.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_051.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_052.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_053.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_054.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_055.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_056.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_057.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_058.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_059.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_060.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_061.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_062.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_063.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_064.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_065.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_066.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_067.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_068.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_069.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_070.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_071.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_072.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_073.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_074.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_075.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_076.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_077.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_078.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_079.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_080.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_081.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_082.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_083.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_084.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_085.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_086.png
      
       
       
     
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_181.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_182.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_183.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_184.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_185.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_186.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_187.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_188.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_189.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_190.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_191.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_192.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_193.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_194.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_195.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_196.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_197.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_198.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_199.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_200.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_201.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_202.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_203.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_204.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_205.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_206.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_207.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_208.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_209.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_210.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_211.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_212.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_213.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_214.png
      
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_269.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_270.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_271.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_272.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_273.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_274.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_275.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_276.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_277.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_278.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_279.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_280.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_281.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_282.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_283.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_284.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_285.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_286.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_287.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_288.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_289.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_290.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_291.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_292.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_293.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_294.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_295.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_296.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_297.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_298.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation_299.png

       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_001.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_301.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_302.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_003.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_004.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_005.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_006.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_056.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_057.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_058.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_059.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_060.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_061.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_062.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_063.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_064.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_065.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_066.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_067.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_068.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_069.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_070.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_071.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_072.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_073.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_074.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_075.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_076.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_077.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_078.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_079.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_080.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_081.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_082.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_083.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_084.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_085.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_086.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_087.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_088.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_089.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_090.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_091.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_092.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_093.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_094.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_191.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_192.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_193.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_194.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_195.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_196.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_197.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_198.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_199.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_200.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_201.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_202.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_203.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_204.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_205.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_206.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_207.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_208.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_209.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_210.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_211.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_212.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_213.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_214.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_215.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_216.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_217.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_218.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_219.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_220.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_221.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_222.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_223.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_224.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_225.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_226.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_227.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_228.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_229.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_230.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_231.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_232.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_233.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_234.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_235.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_236.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_237.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_238.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_239.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_240.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_241.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_242.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_243.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_244.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_245.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_246.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_247.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_248.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_249.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_250.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_250.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_251.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_252.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_253.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_254.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_255.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_256.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_257.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_258.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_259.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_260.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_261.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_262.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_263.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_264.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_265.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_266.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_267.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_268.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_269.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_270.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_271.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_272.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_273.png
       
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_274.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_275.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_276.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_277.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_278.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_279.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_280.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_281.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_282.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_283.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_284.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_285.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_286.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_287.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_288.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_289.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_290.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_291.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_292.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_293.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_294.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_295.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_296.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_297.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_298.png
       ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com)_299.png
       

        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_000.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_001.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_002.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_003.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_004.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_005.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_006.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_007.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_008.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_009.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_010.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_011.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_012.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_013.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_014.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_015.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_016.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_017.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_018.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_019.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_020.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_021.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_022.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_023.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_024.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_025.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_026.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_027.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_028.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_029.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_030.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_031.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_032.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_033.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_034.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_035.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_036.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_037.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_038.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_039.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_040.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_041.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_042.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_043.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_044.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_045.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_046.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_047.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_048.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_049.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_050.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_051.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_052.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_053.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_054.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_055.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_056.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_057.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_058.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_059.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_151.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_152.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_153.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_154.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_155.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_156.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_157.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_158.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_159.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_160.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_161.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_162.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_163.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_164.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_165.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_166.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_167.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_168.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_169.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_170.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_171.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_172.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_173.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_174.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_175.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_176.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_177.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_178.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_179.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_180.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_181.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_182.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_183.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_184.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_185.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_186.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_187.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_188.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_189.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_190.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_191.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_192.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_193.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_194.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_195.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_196.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_197.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_198.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_199.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_200.png 
        
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_201.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_202.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_203.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_204.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_205.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_206.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_207.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_208.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_209.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_210.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_211.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_212.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_213.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_214.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_215.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_216.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_217.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_218.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_219.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_220.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_221.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_222.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_223.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_224.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_225.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_226.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_227.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_228.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_229.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_230.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_231.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_232.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_233.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_234.png      
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_240.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_241.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_242.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_243.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_244.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_245.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_246.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_247.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_248.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_249.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_250.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_251.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_252.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_253.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_254.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_255.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_256.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_257.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_258.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_259.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_260.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_261.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_262.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_263.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_264.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_265.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_266.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_267.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_268.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_269.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_270.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_271.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_272.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_273.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_274.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_275.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_276.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_277.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_278.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_279.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_280.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_281.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_282.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_283.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_284.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_285.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_286.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_287.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_288.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_289.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_290.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_291.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_292.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_293.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_294.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_295.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_296.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_297.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_298.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_299.png       
        ./3D Triathlon Bike Commercial - High Tech Animated Marketing Video _ Trinity Animation (online-video-cutter.com) (1)_300.png 
        
        


      

       
       
       
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 500;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })