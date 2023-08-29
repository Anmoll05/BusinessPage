import React, {useState} from 'react'

export const SearchBar = () => {
    const data = [
        'qwerty', 'hegw', 'defghe', 'fadsgfbdg', 'asdfgh', 'poiuy'
    ];
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const handleChange = (e) => {
        const val = e.target.value.toLowerCase();
        let fdata = data.filter((ev) => ev.toLowerCase().includes(val));
        setFilteredData(fdata);

    };
  return (
    <div>
        
    <div style={{margin: 'auto'}}>
        <input type="text" onChange={(e) => handleChange(e)}/>
        {
            filteredData?.length === 0 ?
            <ul>
                {
                    data?.map((e) => (<li>{e}</li>))
                }
            </ul>
            :
            <ul>
                {
                    filteredData?.map((e) => (<li>{e}</li>))
                }
            </ul>

        }
    </div>
    
    </div>
  )
}
