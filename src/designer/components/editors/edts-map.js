import demoEdt from './demoEdt/demoEdt.vue';
import bannerEdt from './bannerEdt/bannerEdt.vue';
import twoImageEdt from './twoImageEdt/twoImageEdt.vue';
var edtArr = [], edtObj = {};
edtArr.push({edtName: 'demoEdt', constructor: demoEdt});
edtArr.push({edtName: 'bannerEdt', constructor: bannerEdt});
edtArr.push({edtName: 'twoImageEdt', constructor: twoImageEdt});
edtArr.forEach((e, i) => {
    edtObj[e['edtName']] = e['constructor'];
});
export {edtArr, edtObj};