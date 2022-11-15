import './SCSS/page_12.scss'
import { useState, useEffect, useRef } from "react";


export default function Page_12() {

	const tBody = useRef()
	const minusColumn = useRef()
	const minusRow = useRef()

	const [columnDisplay, setColumnDisplay] = useState(true);
	const [rowDisplay, setRowDisplay] = useState(false);

	const [arrRows, setArrRows] = useState([]);
	const [rIndex, setRIndex] = useState(0);								 		// індекс рядка на якому стоіть курсор
	const [cIndex, setCIndex] = useState(0);                		// індекс стовпчика на якому стоіть курсор
	const [marginLeft, setMarginLeft] = useState('108px');
	const [marginTop, setMarginTop] = useState('106px');
	const [tr, setRr] = useState([]);                      // масив рядків
	const [td, setCc] = useState([]);                      // масив колонок
	useEffect(() => {
		(function arrOfTr() {
			let arr = [];
			for (let i = 0; i <= 5; i++) {
				arr.push(i);
			}
			setRr(arr)
		})()
	}, [])

	useEffect(() => {
		(function arrOfTr() {
			let arr = [];
			for (let i = 0; i <= 5; i++) {
				arr.push(i);
			}
			setCc(arr)
		})()
	}, [])

	const minusHorizontal = () => {
		let LengthColumn = tBody.current.rows.length;
		if (LengthColumn > 1) {
			tBody.current.deleteRow(rIndex);
			if (rIndex === (LengthColumn - 1)) {
				let a = minusRow.current.attributes.style.value.split(' ')[1].split('px')[0];
				setMarginTop(`${a - 52}px`);
				setRIndex(rIndex - 1)
			}
		}
		if (LengthColumn < 3 || (LengthColumn - 1) === rIndex) {
			setRowDisplay(false);
		}
	}

	const minusVertical = () => {
		let LengthRow = tBody.current.rows[0].cells.length;
		let rows = tBody.current.rows;
		if (LengthRow > 1) {
			for (let i = 0; i < rows.length; i++) {
				rows[i].deleteCell(cIndex);
			}
			if (cIndex === (LengthRow - 1)) {                                             // якщо колонка остання, то 
				let a = minusColumn.current.attributes.style.value.split(' ')[1].split('px')[0];
				setMarginLeft(`${a - 52}px`);
				setCIndex(cIndex - 1)
			}
		}
		if (LengthRow < 3 || (LengthRow - 1) === cIndex) {
			setColumnDisplay(false)
		}
	}

	const plusHorizontal = () => {
		let amountColumn = tBody.current.rows[0].cells.length;
		let amountRows = tBody.current.rows.length;                         // кількість клитинок в рядку                                  // кількість 'tr' в 'tbody' 
		let newRow = tBody.current.insertRow(-1);                                   // додаемо новий рядок
		for (let i = 0; i < amountColumn; i++) {
			newRow.insertCell();                                              // додаем стільки клітинок в новий рядок скільи  
		}
		if (amountRows > 0) {
			setRowDisplay(true);
		}
	}

	const plusVertical = () => {
		let LengthRow = tBody.current.rows[0].cells.length;
		let allRows = tBody.current.rows;                                               // усі 'tr' які є в 'tbody'
		for (let i = 0; i < allRows.length; i++) {
			allRows[i].insertCell(- 1);                                       // додаємо 'td' до кожного 'tr'
		}
		if (LengthRow < 3) {
			setColumnDisplay(true)
		}
	}

	const findIndexes = (e) => {
		let cell = e.target,
			row = cell.parentElement,
			rows = row.parentElement.children;
		let columns = row.children;
		if (e.target.id !== 'table') {
			for (let i = 0; i < rows.length; ++i) {
				if (rows[i] === row) {
					setRIndex(i)
					break;
				}
			}
			for (let j = 0; j < columns.length; ++j) {
				if (columns[j] === cell) {
					setCIndex(j)
					break;
				}
			}
		}
	}
	function move(cIndex, rIndex) {
		switch (cIndex) {
			case 0:
				setMarginLeft('4px');
				break;
			case 1:
				setMarginLeft('56px');
				break;
			case 2:
				setMarginLeft('108px');
				break;
			case 3:
				setMarginLeft('160px');
				break;
			case 4:
				setMarginLeft('212px');
				break;
			case 5:
				setMarginLeft('264px');
				break;
			case 6:
				setMarginLeft('316px');
				break;
			case 7:
				setMarginLeft('368px');
				break;
			case 8:
				setMarginLeft('420px');
				break;
			case 9:
				setMarginLeft('472px');
				break;
			default:
				console.log('cIndex --> error');
		}
		switch (rIndex) {
			case 0:
				setMarginTop('54px');
				break;
			case 1:
				setMarginTop('106px');
				break;
			case 2:
				setMarginTop('158px');
				break;
			case 3:
				setMarginTop('210px');
				break;
			case 4:
				setMarginTop('262px');
				break;
			case 5:
				setMarginTop('314px');
				break;
			case 6:
				setMarginTop('366px');
				break;
			case 7:
				setMarginTop('418px');
				break;
			case 8:
				setMarginTop('470px');
				break;
			case 9:
				setMarginTop('522px');
				break;
			default:
				console.log('rIndex --> error');
		}
	}
	const tbodyOnMouseMove = (e) => {
		setArrRows([...e.nativeEvent.path[2].rows]);
		findIndexes(e);       // знаходжу індекси
		move(cIndex, rIndex); // позиціювання кнопок видалення
	}

	function columnCountBiggerThenOne() {       // показати ГОРИЗОНТАЛЬНУ КНОПКУ
		let countColumns = tBody.current.rows[0].cells.length;
		if (countColumns > 1) {
			setColumnDisplay(true);
		}
	}

	function amountRowsBiggerThenOne() {        // показати ВЕРТИКАЛЬНУ КНОПКУ
		let amountRows = tBody.current.rows.length;
		if (amountRows > 1) {
			setRowDisplay(true);
		}
	}

	const tableLeave = () => {   // СХОВАТИ КНОПКИ КОЛИ ВИХОЖУ з 'TBODY'
		setRowDisplay(false);
		setColumnDisplay(false);
	}

	function tableMove() {            // ПОКАЗАТИ КНОПКИ КОЛИ ЗАХОЖУ в 'TBODY'
		columnCountBiggerThenOne()
		amountRowsBiggerThenOne()
	}

	function verticalEnter() {   // Перехожу на вертикальну кнопку
		setColumnDisplay(true);
	}

	function verticalLeave() {   // ВИхожу з ветрикальной кнопки
		setColumnDisplay(false);
	}

	function horizontalEnter() {  // Перехожу на горизонтальну кнопку
		setRowDisplay(true)
	}

	function horizontalLeave() {  // Вихожу з горизонтальной кнопки
		setRowDisplay(false)
	}

	return (
		<div className='page12'>
			<div className='page12Wrapper'>
				<div className="container__minusHorizontal">
					<button className="button minus"
						ref={minusRow}
						onClick={minusHorizontal}
						onMouseEnter={horizontalEnter}
						onMouseLeave={horizontalLeave}
						style={{
							marginTop: marginTop,
							display: `${rowDisplay ? 'block' : 'none'}`
						}}
					>-</button>
				</div>
				<div>
					<div className="container__minusVertical">
						<button
							className="button minus"
							ref={minusColumn}
							onClick={minusVertical}
							onMouseEnter={verticalEnter}
							onMouseLeave={verticalLeave}
							style={{
								marginLeft: marginLeft, display: `${columnDisplay ? 'block' : 'none'}`
							}}>-</button>
					</div>
					<table onMouseMove={tableMove} onMouseLeave={tableLeave}>
						<tbody
							onMouseMove={tbodyOnMouseMove}
							ref={tBody}>
							{
								tr.map((i, index) =>
									<tr key={index}>
										{td.map((j, index) => <td key={index}>{j + i}</td>)}
									</tr>)
							}
						</tbody>
					</table>
					<button className="button plus plusHorizontal" onClick={plusHorizontal} title='awdawd'>+</button>
				</div>
				<button className="button plus plusVertical" onClick={plusVertical}>+</button>
			</div>
		</div>
	)
}



// {
//     [...Array(tr)].map((item, index) => <tr key={index}>
//         {[...Array(td)].map((item, index) => <td key={index}>a</td>)}
//     </tr>)
// }


// {
// 	r.map((_, index) =>
// 		<tr key={index}>
// 			{d.map((item, index) => <td key={index}>{item}</td>)}
// 		</tr>)
// }