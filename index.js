var data = [4, 7, 45, 60, 120]

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select('.chart')
    .selectAll('div')
        .data(data)
    .enter().append('div')
        .style('width', function(d) { return x(d) + 'px';})
        .text(funcion(d) {return d;});
