const BASE_URL = "https://dummyjson.com";
const app = {
  _query: {
    order: "desc",
    limit: 10,
    page: 1,
  },
  init() {
    this.getUser();
    this.search();
    this.sort();
  },
  async getUser() {
    try {
      //Add loading
      this.renderLoading();
      const skip = (this._query.page - 1) * this._query.limit;
      let url = `${BASE_URL}/posts?sortBy=id&order=${this._query.order}&limit=${this._query.limit}&skip=${skip}`;
      if (this._query.q) {
        url = `${BASE_URL}/posts/search?q=${this._query.q}&sortBy=id&order=${this._query.order}&limit=${this._query.limit}&skip=${skip}`;
      }

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch / posts");
      }
      const data = await response.json();
      const pageNumber = Math.ceil(data.total / this._query.limit);
      this.renderPaginate(data.pageNumber);
      this.renderPosts(data.posts);
    } catch (error) {
      //Add error
      this.renderError(error.message);
    } finally {
      //Remove loading
      this.renderLoading(false);
    }
  },
  renderPaginate(pageNumber) {
    const paginateEL = document.querySelector(".js-paginate");
    for (let page = 1; page <= pageNumber; page++) {
      const active = this._query.page === page ? "bg-green-600" : "";
      paginateEL.innerHTML += `<button class="border border-gray-300 px-4 py-2 ${active}">${page}</button>`;
    }
    console.log(pageNumber);
  },
  renderLoading(status = true) {
    const loadingEL = document.querySelector(".js-loading");
    loadingEL.innerHTML = status
      ? `<span class=block text-3xl text-center">Loading...</span>`
      : "";
  },
  renderPosts(posts) {
    const postListEL = document.querySelector(".js-post-list");
    postListEL.innerHTML = posts
      .map(
        (post) =>
          ` <div class="my-3 border border-gray-300 p-5">
          <h2 class="text-2xl font-medium mb-3">
            ${this.sanitizeText(post.title)}
          </h2>
          <p>
             ${this.sanitizeText(post.body)}
          </p>
          <div class="flex justify-between mt-3">
            <button
              class="cursor-pointer border border-gray-300 py-2 px-5 hover:bg-green-600 rounded-full"
            >
              Xem chi tiết
            </button>
            <div class="flex gap-2">
              <span class="cursor-pointer">Sửa</span>
              <span class="text-red-600 cursor-pointer">Xóa</span>
            </div>
          </div>
        </div>
      
        </div>`
      )

      .join("");
  },
  sanitizeText(text) {
    return text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  },
  search() {
    const inputEL = document.querySelector(".js-search");
    inputEL.addEventListener(
      "input",
      this.debounce((e) => {
        const keyword = e.target.value;
        this._query.q = keyword;
        this.getUser();
      })
    );
  },
  debounce(callback, timeout = 500) {
    let id;
    return (...args) => {
      //args: Mảng các tham số
      if (id) {
        clearTimeout(id);
      }

      id = setTimeout(() => {
        callback.apply(null, args);
      }, timeout);
    };
  },
  sort() {
    const btnList = document.querySelectorAll(".js-sort-button");
    btnList.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sortValue = btn.dataset.sort;
        const btnActive = document.querySelector(".js-sort .btn-active");
        if (btnActive) {
          btnActive.classList.remove("btn-active");
        }
      });
    });
  },
};
app.init();

//keyword -->call api -->render
//debounce--> Nhận vào 1 hàm và trả về 1 hàm(Tính năng lọc tìm kiếm, tính năng chuyển tiền)
//Đọc lại closure

//Phân trang
//- Backend --> giới hạn(Mỗi trang 10 bản ghi)
//- Backend --> nhận params là page hoặc offset,skip

//Minh hoạ:
//1
//2
//3
//4
//5
//6
//7

//Limit =3, skip=0

//Conver page sang skip
//skip = (page - 1) * limit
//Math.row
//Math.cell
//Math.flor
//urlSearchParams