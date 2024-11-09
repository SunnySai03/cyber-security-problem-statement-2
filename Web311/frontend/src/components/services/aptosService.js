// frontend/src/services/aptosService.js
export const fetchAlerts = async () => {
    const response = await fetch("/api/alerts");
    const data = await response.json();
    return data;
  };
  