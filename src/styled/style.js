import styled from 'styled-components'



export const Wrapper = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));
gap:20px;
padding-top:15px;
justify-items:center;

@media screen and (max-width:768px){
   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
`


