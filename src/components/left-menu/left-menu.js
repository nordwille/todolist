import './left-menu.css';

const LeftMenu = () => {
    return (
      <nav class="left-menu">
        <ul class="ulMenu">
          <li class="incoming">
              <i class="fa-solid fa-inbox"></i>   
              Входящие
          </li>

          <li class="today">
              <i class="fa-solid fa-calendar-day"></i> 
              Сегодня
          </li>
          
          <li class="forthcoming">
              <i class="fa-solid fa-calendar-days"></i>
              Предстоящие
          </li>

          <li class="filter">
              <i class="fa-solid fa-filter"></i>
              Фильтры и метки
          </li>
        </ul>
      </nav>
    )
}

export default LeftMenu; 