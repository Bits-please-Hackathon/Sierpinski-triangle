function passValues(depth){
    if(depth < 0){
            window.alert("Uzmite vrednost vecu od 0");
            return;
        }

    const ctx=document.getElementById("triangle-box").getContext("2d");
    
    
    //clear canvas before new drawing
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();

    //draw triangle
    drawTriangle(50,366,450,366,250,20,depth,ctx);
    
    //line style
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    
}


function drawTriangle(Ax,Ay,Bx,By,Cx,Cy,depth,ctx) {
    if(depth>0) {
        drawTriangle(Ax,Ay,(Ax + Cx) / 2,(Ay + Cy) / 2,(Ax + Bx) / 2,(Ay + By) / 2,depth-1,ctx);
        drawTriangle((Ax + Bx) / 2,(Ay + By) / 2,(Bx + Cx) / 2,(By + Cy) / 2,Bx,By,depth-1,ctx);
        drawTriangle((Ax + Cx) / 2,(Ay + Cy) / 2,(Bx + Cx) / 2,(By + Cy) / 2,Cx,Cy,depth-1,ctx);
    }
    else {
        ctx.moveTo(Ax,Ay);
        ctx.lineTo(Bx,By);
        ctx.lineTo(Cx,Cy);
        ctx.lineTo(Ax,Ay);
    }
}
