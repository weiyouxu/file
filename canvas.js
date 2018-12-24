// 画直线
/*
context.beginPath();//一个图形绘制开始
context.moveTo(100,100);//起点 100 ，100 位置
context.lineTo(500,500);//终点 500,500 位置 
context.lineTo(100,500);
context.lineTo(100,100);
context.lineWidth = 5;// 线的宽度
context.strokeStyle = "#dadada";//线的颜色
context.stroke();//生成 上面 100,100 到 500,500的线 ，stroke 方法 是绘制线条， moveTo，lineTo 状态生成

context.fillStyle = "rgba(125,34,140,0.5)"; // 给绘制的图形 填充 颜色数值
context.fill(); // 给绘制的图形 填充颜色 ，用fill的时候 会自动添加一条闭合线
context.closePath();//一个图形绘制结束 和 beginPath 不一定要成对出现，当成对出现的时候如果没有闭合线 canvas会自动添加一条闭合收尾的线，如果在一个for循环里面只有beginPath ，canvas就不会去添加一条闭合线

//如果要2个图片一定要用  beginPath 和 closePath 包裹起来
context.beginPath();
context.moveTo(400,400);
context.lineTo(400,100);
context.strokeStyle = "red";
context.stroke();
context.closePath();

// 绘制 弧线 和 园 
// context.arc(
//     contextX,contextY,startingAngle,endingAngle,anticlockwise
//     //圆心的 x，圆心的 y，哪个弧度为开始，哪个弧度为结束，顺时针 false或者逆时针 true
// )
context.beginPath();
context.arc(300,300,200,0,2*Math.PI,false);// 里面的2*Math.PI 是指 园画多少 一个园分为 4个PI 一个PI为0.5
context.stroke();
context.closePath();
*/