<template>
  <div id="blog-page">
    <!-- Showcase -->
    <div class="blog-showcase pb-40">
      <AppHero
        titleStyle="display-2 has-text-weight-bold mb-16"
        title="Blog Details"
        text="Printer Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and a type specimen book."
        :img="require('@/assets/about-us-5.png')"
        responsiveShowcase
      >
        <button
          slot="btn-content"
          class="btn navbar-item btn-rounded has-background-green is-borderless py-16 px-30"
        >
          <router-link to="/" class="has-text-darkgrey is-transitionless pr-4">
            <i class="fa fa-home"></i>
            Home
          </router-link>/
          <span class="has-text-white">Blog Details</span>
        </button>
      </AppHero>
    </div>

    <!-- Blog Content -->
    <section class="blog-content">
      <div class="container">
        <div class="columns">
          <!-- 1 column -->
          <div class="column is-2 has-text-centered">
            <button class="has-background-green has-text-white badge title is-3">
              12
              <p class="subtitle is-6 has-text-white">Aug</p>
            </button>
            <AppIcon fab :icons="socialIcons">
              <template v-slot:icon="{ icon }">
                <a :href="icon.href" class="has-text-green">
                  <i :class="icon.name"></i>
                </a>
              </template>
            </AppIcon>
          </div>
          <!-- 2 column -->
          <div class="column is-7">
            <div class="image mb-50">
              <img src="@/assets/blog-page-img.jpg" alt="blog img" class="responsive-img" />
            </div>
            <div class="mb-40">
              <span
                class="has-background-green has-text-white has-text-weight-bold p-12 mr-12"
              >Fashion</span>
              <span class="has-background-green has-text-white has-text-weight-bold p-12">Style</span>
            </div>
            <div class="text-content">
              <h5 class="display-3 has-text-weight-bold">Established fact that a reader will be</h5>
              <p class="is-subtitle-1 pt-8">
                By:
                <a href="#!">Admin</a>
                |
                <span>May 10, 2020</span>
              </p>
            </div>
            <div class="my-30">
              <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.</p>
            </div>
            <div class="has-text-centered">
              <h5
                class="display-5 has-text-weight-bold"
              >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h5>
            </div>

            <!-- 2.1 -->
            <div class="columns my-30 has-text-centered">
              <div class="column">
                <img src="@/assets/blog-img1.jpg" alt="blog img" />
              </div>
              <div class="column">
                <img src="@/assets/blog-img2.jpg" alt="blog img" />
              </div>
              <div class="column">
                <img src="@/assets/blog-img3.jpg" alt="blog img" />
              </div>
            </div>
            <div class="mb-30">
              <h5 class="display-3 has-text-weight-medium">Established fact that a reader will be</h5>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <!-- comment box -->
            <article class="comment-box pt-30 px-20 pb-10">
              <AppCommentBox
                avatarSize="150px"
                title="Rinks Kevin"
                subtitle="May 10, 2020 at 00:32 pm"
                text="CEO & It was popularised in the 1960s with the and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              ></AppCommentBox>
              <div class="mt-40">
                <h5 class="display-5 has-text-weight-bold">
                  Comments
                  <span class="subtitle is-6 has-text-weight-medium">/ 21</span>
                </h5>

                <div class="comment-item" v-for="(comment, index) in comments" :key="index">
                  <AppCommentBox
                    :avatar="comment.img"
                    :title="comment.title"
                    :subtitle="comment.subtitle"
                    text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
                    :reply="true"
                  ></AppCommentBox>
                </div>
              </div>

              <!-- Post Comment -->
              <form class="post-comment pt-30">
                <h5 class="display-5 has-text-weight-bold">Post A Comment</h5>
                <div class="columns">
                  <div class="column" v-for="(post, index) in postComments" :key="index">
                    <AppInput
                      styles="is-rounded is-medium"
                      :label="post.label"
                      :placeholder="post.placeholder"
                    />
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <AppInput
                      textarea
                      styles="is-rounded is-medium"
                      label="Comment"
                      placeholder="Comment*"
                    />
                    <div class="field py-30">
                      <div class="control">
                        <button type="submit" class="btn btn-green btn-rounded btn-large">Send Post</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <!-- end post comment -->
            </article>
          </div>
          <!-- 3 column -->
          <div class="column is-3">
            <!-- Search Input -->
            <div class="comment-box py-30 px-24 mb-50">
              <AppInput
                styles="is-rounded is-medium"
                placeholder="Search.."
                :icon="true"
                iconName="fas fa-search"
              />
            </div>
            <!-- Recent Articles -->
            <div class="comment-box pt-30 px-24 mb-50">
              <h5 class="display-4 has-text-weight-bold mb-40">Recent Articles</h5>
              <div class="mb-30" v-for="(article, index) in recentArticles" :key="index">
                <AppCommentBox :avatar="article.img" avatarSize="40px" :rounded="false">
                  <div slot="media-content">
                    <p class="is-subtitle-1" style="line-height: 19px">
                      By:
                      <a href="#!" class="has-text-weight-bold">Admin</a>
                      <br />
                      {{ article.title }}
                    </p>
                    <a href="#!" class="is-subtitle-1 has-text-weight-bold">{{ article.subtitle }}</a>
                  </div>
                </AppCommentBox>
              </div>
            </div>
            <!-- Tags -->
            <div class="comment-box py-30 px-24">
              <h5 class="display-4 has-text-weight-bold mb-20">Tags</h5>
              <ul class="tag-lists">
                <li v-for="(tag, index) in tags" :key="index">
                  <a href="#!">{{ tag.name }}</a>
                  ({{ tag.count }})
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";
import AppIcon from "@/components/AppIcon";
import AppCommentBox from "@/components/AppCommentBox";
import AppInput from "@/components/AppInput";

export default {
  name: "Blog",
  components: {
    AppHero,
    AppIcon,
    AppCommentBox,
    AppInput
  },
  data() {
    return {
      socialIcons: [
        { name: "fab fa-facebook-f", href: "#!" },
        { name: "fab fa-twitter", href: "#!" },
        { name: "fab fa-google", href: "#!" }
      ],
      // Comments
      comments: [
        {
          img: require("@/assets/blog-comment-4.jpg"),
          title: "Kevin Martin",
          subtitle: "May 9, 2020 at 14:14 am"
        },
        {
          img: require("@/assets/blog-comment-3.jpg"),
          title: "John Foe",
          subtitle: "May 9, 2020 at 9:57 am"
        },
        {
          img: require("@/assets/blog-comment-2.jpg"),
          title: "Lora Jenkins",
          subtitle: "May 8, 2020 at 1:40 pm"
        }
      ],
      postComments: [
        { label: "Name", placeholder: "Your Name*" },
        { label: "Email", placeholder: "Your Email*" },
        { label: "Phone", placeholder: "Your No*" }
      ],
      recentArticles: [
        {
          img: require("@/assets/blog-articles-1.jpg"),
          title: "May 10, 2020",
          subtitle: "Consectetur adipiscing elit"
        },
        {
          img: require("@/assets/blog-articles-2.jpg"),
          title: "May 9, 2020",
          subtitle: "Eiusmod tempor incididunt"
        },
        {
          img: require("@/assets/blog-articles-3.jpg"),
          title: "May 8, 2020",
          subtitle: "Ut enim ad minim"
        },
        {
          img: require("@/assets/blog-articles-4.jpg"),
          title: "May 10, 2020",
          subtitle: "Quis nostrud exercitation"
        },
        {
          img: require("@/assets/blog-articles-5.jpg"),
          title: "May 11, 2020",
          subtitle: "Excepteur sint occaecat"
        }
      ],
      tags: [
        { name: "Bulma", count: "5" },
        { name: "HTML5", count: "12" },
        { name: "Wordpress", count: "3" },
        { name: "CSS3", count: "9" },
        { name: "Creative", count: "6" },
        { name: "Multipurpose", count: "7" },
        { name: "Adobe Xd", count: "2" },
        { name: "Vue", count: "5" },
        { name: "Vuetify", count: "1" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#blog-page {
  position: relative;

  // Content
  .blog-content {
    padding-bottom: 100px;
    .badge {
      border-radius: 50%;
      border: none;
      outline: none;
      height: 80px;
      width: 80px;
      padding-top: 10px;
    }

    .comment-box {
      border: 1px solid #e4e4e4;
      border-radius: 8px;
    }
    .comment-item {
      padding: 20px;
      border: 1px solid #e7e7e7;
      margin-bottom: 20px;
    }

    .tag-lists {
      li {
        font-size: 14px;
        margin-top: 28px;
        a {
          font-weight: 600;
          color: inherit;
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }
}

// AppIcon component
ul#app-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  li {
    height: 50px;
    width: 50px;
    line-height: 50px;
  }
}
</style>
