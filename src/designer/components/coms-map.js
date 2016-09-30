var comArr = [], comObj = {};
import banner from 'components/banner/banner.vue';
import bannerLogo from 'components/banner/bannerLogo.png';
import symmetry from 'components/symmetry/symmetry.vue';
import symmetryLogo from 'components/symmetry/symmetryLogo.png';
comArr.push({comName: 'banner', constructor: banner, logo: bannerLogo});
comArr.push({comName: 'symmetry', constructor: symmetry, logo: symmetryLogo});
comArr.forEach((e, i) => {
    comObj[e['comName']] = e['constructor'];
});
export {comArr, comObj};