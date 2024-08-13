// 

function F(){
    const fs = ["f","e","d","c","b","a"];
    fs.sort();

    const fffs = [{f1:"f", f2:6, f3: "F"}, {f1:"e", f2:5, f3: "E"}, {f1:"d", f2:4, f3: "D"},
                  {f1:"c", f2:3, f3: "C"}, {f1:"b", f2:2, f3: "B"}, {f1:"a", f2:1, f3: "A"}];
    fffs.sort((a,b) => a.f1.localeCompare(b.f1));
    // b.f1.localeCompare(a.f1) 반대로 정렬
    // fffs.sort((a,b) => a.f2 - b.f2) 오름차순 정렬
    // b.f2 - a.f2 내림차순 정렬

    const filter = fffs.filter(fff => fff.f2 > 5);

    const list = fs.map((f, index) => <div key={index}>{f}</div>);
    const detail = fffs.map(fff => <div key={fff.f2}> {fff.f1}+{fff.f2}+{fff.f3}</div>);
    const unique = filter.map(f => <h3 key={f.f2}> {f.f1}{f.f2}{f.f3} </h3>);

    return(
        <div>{list} | {detail} | {unique} |</div>
    );
}

export default F
