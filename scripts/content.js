const hostname = document.location.hostname;
const article =
	document.querySelector('article') ?? document.querySelector('.main');

const isLigblog = hostname === 'liginc.co.jp' && article;
const isDevelopersIO = hostname === 'dev.classmethod.jp' && article;

if (isLigblog) {
	const text = article.textContent;
	const wordMatchRegExp = /[^\s]+/g;
	const characters = text.match(wordMatchRegExp);
	const characterCount = characters.join().length;
	// 1分間で読める文字の量を400と仮定して計算
	const readingTime = Math.round(characterCount / 600);
	// 読了時間表示用の要素を生成
	const badge = document.createElement('p');
	badge.classList.add(
		`font-en-small`,
		`text-gray-60`,
		`mt-[8px]`,
		`text-[12px]`,
		`md:text-[13px]`,
		`2xl:text-[0.52rem]`,
		`2xl:mr-[0.56rem]`
	);
	badge.textContent = `⏱️ 読了時間の目安は ${readingTime} 分です。`;
	// h1 or timeタグがある場合、それの直後に読了時間を表示
	// timeタグが優先、なければh1タグの直後
	const heading = article.querySelector('h1 > span');
	const date = article.querySelector('time')?.parentNode;
	(heading ?? date).insertAdjacentElement('afterend', badge);
} else if (isDevelopersIO) {
	const text = article.textContent;
	const wordMatchRegExp = /[^\s]+/g;
	const characters = text.match(wordMatchRegExp);
	const characterCount = characters.join().length;
	// 1分間で読める文字の量を400と仮定して計算
	const readingTime = Math.round(characterCount / 600);
	// 読了時間表示用の要素を生成
	const badge = document.createElement('p');
	badge.classList.add(`date`);
	badge.textContent = `⏱️ 読了時間の目安は ${readingTime} 分です。`;
	// h1 or timeタグがある場合、それの直後に読了時間を表示
	// timeタグが優先、なければh1タグの直後
	const heading = article.querySelector('h1');
	const date = article.querySelector('.date');
	(date ?? heading).insertAdjacentElement('afterend', badge);
}
