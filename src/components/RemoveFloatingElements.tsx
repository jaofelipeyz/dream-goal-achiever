import { useEffect } from "react";

const RemoveFloatingElements = () => {
  useEffect(() => {
    // Função que remove elementos flutuantes com estilos específicos
    const removeFloating = () => {
      document.querySelectorAll('[style^="position: fixed"][style*="bottom: 1rem"][style*="z-index: 2147483647"]').forEach(el => el.remove());
    };

    // Executa a função imediatamente ao carregar
    removeFloating();

    // Observa mudanças no DOM e reaplica a função se novos elementos forem adicionados
    const observer = new MutationObserver(removeFloating);
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup ao desmontar o componente
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default RemoveFloatingElements;
