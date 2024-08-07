<template>
    <div class="dashboard-container">
      <div class="header">
        <div class="logo">
          IATRAX
        </div>
        <div class="user-info">
          <div class="user-icon"></div>
          <span class="user-name">John Doe</span>
          <div class="language-dropdown">
            fr
            <svg
              width="12"
              height="6"
              viewBox="0 0 12 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.457 1.248L6 5.752L0.543 1.248"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="dashboard-menu">
        <a href="#" class="dashboard-item active">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83333 12.6667L12 5.33333L5.83333 2.66667"
              stroke="#F05A5A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8333 9.16667L13.3333 5.33333L15.8333 9.16667"
              stroke="#F05A5A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Tableau de bord
        </a>
        <a href="#" class="dashboard-item">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00001 10.6667L10.6667 7.33333L13.3333 10.6667"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33334 4.66667H6.66667"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.16667 11.6667H8.83334"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Mes prix relevés
        </a>
        <a href="#" class="dashboard-item">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6.66667V10.6667H12V6.66667H4ZM9.33333 2.66667V4.66667H6.66667V2.66667H9.33333Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Magasins relevés
        </a>
        <a href="#" class="dashboard-item">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 3.33333H3.33333V11.6667H12.6667V3.33333Z"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.66667 7.33333H11.3333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Produits suivis
        </a>
        <a href="#" class="dashboard-item">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6667 8.66667H5.33333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3333 11.3333L13.3333 9.33333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3333 5.33333L13.3333 7.33333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Infos générales
        </a>
        <a href="#" class="dashboard-item">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3333 4.33333L11.3333 11.3333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33333 11.3333L11.3333 5.33333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.33333 4.33333L7.33333 11.3333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Comptes - crédits
        </a>
        <a href="#" class="dashboard-item">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1667 7.33333H1.83333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.33334 2.66667V13.3333"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Moyens de paiement
        </a>
        <a href="#" class="dashboard-item">
          Se déconnecter
        </a>
      </div>
    </div>
  </template>
  
  <style scoped>
  .dashboard-container {
    width: 250px;
    background-color: #f2f4f7;
    border-right: 1px solid #e0e0e0;
    padding: 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #292d32;
  }
  .user-info {
    display: flex;
    align-items: center;
  }
  .user-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #292d32;
    margin-right: 10px;
  }
  .user-name {
    font-size: 14px;
    font-weight: bold;
    color: #292d32;
  }
  .language-dropdown {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #292d32;
    cursor: pointer;
  }
  .dashboard-menu {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .dashboard-item {
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 14px;
    color: #292d32;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .dashboard-item svg {
    margin-right: 10px;
  }
  .dashboard-item.active {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>